'use client'; // Only for app directory
import { useState } from 'react';
import { X } from 'lucide-react'; // Optional: install lucide-react for the icon, or use plain text

type Project = {
  id: number;
  title: string;
  image: string;
};

const allProjects: Project[] = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  image: `/assets/projectbanners/${i + 1}.png`,
}));

const CARDS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [page, setPage] = useState(1);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const totalPages = Math.ceil(allProjects.length / CARDS_PER_PAGE);

  const currentProjects = allProjects.slice(
    (page - 1) * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE
  );

  return (
    <div className="min-h-screen mt-8 p-4 bg-black text-white flex flex-col items-center">
      <h1 className="text-3xl mb-6">Sample Projects</h1>

      <div className="grid gap-6 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map(project => (
          <div
            key={project.id}
            className="border-4 border-cyan-400 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => setZoomImage(project.image)}
            />
            <div className="p-4 bg-gray-900">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-8 gap-4">
        <button
          className="px-4 py-2 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black disabled:opacity-50"
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-cyan-400">Page {page} of {totalPages}</span>
        <button
          className="px-4 py-2 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black disabled:opacity-50"
          onClick={() => setPage(p => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      {/* Image Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-90 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setZoomImage(null);
              }}
            >
              <X size={24} />
              {/* Or use: <span className="text-xl">×</span> */}
            </button>

            <img
              src={zoomImage}
              alt="Zoomed Project"
              className="object-contain rounded-lg transition-all duration-300 transform scale-100 opacity-100 hover:scale-105"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
