'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface TableRow {
  ID: string;
  Name: string;
  Modules: string;
  Domain: string;
  'Price (INR)': string;
}

type SortConfig = {
  key: keyof TableRow | 'Bookings';
  direction: 'asc' | 'desc';
} | null;

export default function Table() {
  const [data, setData] = useState<TableRow[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [domains, setDomains] = useState<string[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string>('');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx271NP9M3d7xgg83vR41oN05oR68HfJHuBw0Ud72lkFSMBBlytwaoIBSsIPp3_pe3ALA/exec";

        const response = await fetch(APPS_SCRIPT_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const result = await response.json();
        if (result.status === 'success' && Array.isArray(result.data)) {
          const typedData = result.data as TableRow[];
          setData(typedData);

          const uniqueDomains = Array.from(new Set(typedData.map(row => row.Domain))) as string[];
          setDomains(uniqueDomains);
        } else {
          throw new Error('Invalid data format received');
        }

        setIsLoading(false);
      } catch (err) {
        setError('Error fetching data. Please try again later.');
        setIsLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const handleSort = (key: keyof TableRow | 'Bookings') => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;

    const aVal = a[key as keyof TableRow];
    const bVal = b[key as keyof TableRow];

    const isNumber = !isNaN(Number(aVal)) && !isNaN(Number(bVal));
    const result = isNumber
      ? Number(aVal) - Number(bVal)
      : String(aVal).localeCompare(String(bVal));

    return direction === 'asc' ? result : -result;
  });

  const filteredData = selectedDomain
    ? sortedData.filter(row => row.Domain === selectedDomain)
    : sortedData;

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const getSortIcon = (key: keyof TableRow | 'Bookings') => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '▲' : '▼';
  };

  if (isLoading) return <div className="text-center p-4">Loading data...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  // Mobile card view renderer
  const renderMobileCards = () => {
    return paginatedData.length > 0 ? (
      <div className="grid grid-cols-1 gap-4">
        {paginatedData.map((row, index) => (
          <div 
            key={row.ID || index} 
            className="bg-black text-white p-4 rounded border border-gray-200 hover:bg-gray-900"
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="font-bold">ID:</div>
              <div>{row.ID}</div>
              
              <div className="font-bold">Name:</div>
              <div>{row.Name}</div>
              
              <div className="font-bold">Modules:</div>
              <div>{row.Modules}</div>
              
              <div className="font-bold">Domain:</div>
              <div>{row.Domain}</div>
              
              <div className="font-bold">Price (INR):</div>
              <div>{row['Price (INR)']}</div>
            </div>
            
            <div className="mt-3 text-center">
            <a href='https://forms.gle/y4Pg85UvRW1tpDB49' target='_blank' rel="noopener noreferrer">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
                Book Me
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center p-4 bg-black text-white border border-gray-200 rounded">
        No data available
      </div>
    );
  };

  return (
    <div className="container mx-auto p-2 md:p-4">
      <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center space-y-3 md:space-y-0">
        {/* Filter */}
        <div className="w-full md:w-auto">
          <label htmlFor="domain-filter" className="block md:inline md:mr-2 font-medium text-sm md:text-base">Filter by Domain:</label>
          <select
            id="domain-filter"
            value={selectedDomain}
            onChange={(e) => {
              setSelectedDomain(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full md:w-auto p-2 border rounded bg-black text-white text-sm"
          >
            <option value="">All Domains</option>
            {domains.map((domain) => (
              <option key={domain} value={domain}>{domain}</option>
            ))}
          </select>
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="rows-per-page" className="text-xs md:text-sm font-medium text-white">Rows:</label>
            <select
              id="rows-per-page"
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="p-1 border rounded bg-black text-white text-xs md:text-sm"
            >
              {[5, 10, 25, 50].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-2 py-1 bg-gray-700 text-white rounded disabled:opacity-50 text-xs md:text-sm"
            >
              Prev
            </button>

            <span className="text-xs md:text-sm text-white">
              {currentPage}/{totalPages || 1}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-2 py-1 bg-gray-700 text-white rounded disabled:opacity-50 text-xs md:text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Table for tablet and desktop / Cards for mobile */}
      <div className="overflow-x-auto">
        {isMobileView ? (
          renderMobileCards()
        ) : (
          <table className="min-w-full bg-black text-white border border-gray-200">
            <thead>
              <tr className="bg-black text-white">
                {['ID', 'Name', 'Modules', 'Domain', 'Price (INR)', 'Bookings'].map((col) => (
                  <th
                    key={col}
                    className="p-2 md:p-3 border cursor-pointer select-none hover:bg-gray-800 text-xs md:text-base"
                    onClick={() => handleSort(col as keyof TableRow)}
                  >
                    {col} <span className="text-xs">{getSortIcon(col as keyof TableRow)}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, index) => (
                  <tr
                    key={row.ID || index}
                    className="bg-black text-white hover:bg-yellow-300 hover:text-black text-xs md:text-base"
                  >
                    <td className="p-2 md:p-3 border border-gray-200 hover:border-green-400">{row.ID}</td>
                    <td className="p-2 md:p-3 border border-gray-200 hover:border-green-400">{row.Name}</td>
                    <td className="p-2 md:p-3 border border-gray-200 hover:border-green-400">{row.Modules}</td>
                    <td className="p-2 md:p-3 border border-gray-200 hover:border-green-400">{row.Domain}</td>
                    <td className="p-2 md:p-3 border border-gray-200 hover:border-green-400">{row['Price (INR)']}</td>
                    <td className="p-2 md:p-3 border border-gray-200 hover:border-green-400">
                    <a href='https://forms.gle/y4Pg85UvRW1tpDB49' target='_blank' rel="noopener noreferrer">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
                Book Me
              </button>
              </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-black text-white">
                  <td colSpan={6} className="p-3 text-center">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}