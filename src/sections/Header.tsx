"use client";
import Link from 'next/link';
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "../../components/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 leading-none  md:h-0 ">
      <div className="w-[90%] md:w-[80%]  m-auto">
        <div className="flex items-center justify-between p-2.5 border border-white/15 rounded-full max-w-[100%] mx-auto backdrop-blur relative">
          <div className="bg-black/5 absolute inset-0 rounded-full -z-10 backdrop-blur"></div>
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

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm font-tomorrow">
              {/* <a className="transition text-white/50 hover:text-white" href="#">
                Samples
              </a> */}
              <Link href="/samples" className="transition text-white/50 hover:text-white">
              Samples</Link>

              <Link href="/projects" className="transition text-white/50 hover:text-white">
              Projects</Link>
              
              <Link href="/pricing" className="transition text-white/50 hover:text-white">
              Pricing Scheme</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            

            <div className="sm:hidden md:block">
              <Link href='/projects'><Button>Get Your Quote</Button></Link>
            </div>

            

            <MenuIcon className="md:hidden"></MenuIcon>
          </div>
        </div>
      </div>
    </header>
  );
};
