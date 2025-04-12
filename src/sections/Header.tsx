"use client";
import Link from 'next/link';
import { useState } from 'react';
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "../../components/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 py-4 leading-none md:h-0">
      <div className="w-[90%] md:w-[80%] m-auto">
        <div className="flex items-center justify-between p-2.5 border border-white/15 rounded-full max-w-[100%] mx-auto backdrop-blur relative">
          <div className="bg-black/5 absolute inset-0 rounded-full -z-10 backdrop-blur"></div>
          
          {/* Logo */}
          <div>
            <div className="inline-flex items-center justify-center gap-1 p-1 border rounded-full w-25 border-white/15">
              <div className="h-[30px] w-[30px]">
                <Link href='/'><LogoIcon /></Link>
              </div>
              <div className="mr-1 text-sm font-extrabold font-tomorrow">
                <Link href='/'>ProjectVerse</Link>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm font-tomorrow">
              <Link href="/samples" className="transition text-white/50 hover:text-white">Samples</Link>
              <Link href="/projects" className="transition text-white/50 hover:text-white">Projects</Link>
              <Link href="/pricing" className="transition text-white/50 hover:text-white">Pricing Scheme</Link>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Only visible on desktop */}
            <div className="hidden md:block">
              <Link href='/projects'><Button>Get Your Quote</Button></Link>
            </div>

            {/* Hamburger */}
            <button onClick={toggleMenu} className="md:hidden">
              <MenuIcon />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/80 rounded-xl p-4 text-center text-white font-tomorrow space-y-3 transition-all ease-in-out duration-300">
            <Link href="/samples" onClick={toggleMenu} className="block hover:text-gray-300">Samples</Link>
            <Link href="/projects" onClick={toggleMenu} className="block hover:text-gray-300">Projects</Link>
            <Link href="/pricing" onClick={toggleMenu} className="block hover:text-gray-300">Pricing Scheme</Link>
            <Link href="/projects" onClick={toggleMenu}><Button className="w-full mt-2">Get Your Quote</Button></Link>
          </div>
        )}
      </div>
    </header>
  );
};
