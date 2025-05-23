"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ModeToggle from "@/components/Theme-btn"
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

    useEffect(() => {
      setProgress(20);
      setTimeout(() => {
        setProgress(50);
      }, 50);
      setTimeout(() => {
        setProgress(80);
      }, 80);
      setTimeout(() => {
        setProgress(100);
      }, 100);
    }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 900);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-background/50 dark:bg-dark-background sticky top-0 border-b backdrop-blur py-3 shadow-lg w-full z-10">
      <LoadingBar
        progress={progress}
        color="#2196F3"
        height={3}
        onLoaderFinished={() => console.log('Loader finished')}
      />
      <div className="max-w-7xl p-2 mx-auto flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          <Link href="/">
            Sumit Singh Sengar<span className="text-sm"></span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-gray-500 dark:hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-500 dark:hover:text-gray-400">About</Link>
          <Link href="/blog" className="hover:text-gray-500 dark:hover:text-gray-400">Blog</Link>
          <Link href="/contact" className="hover:text-gray-500 dark:hover:text-gray-400">Contact</Link>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-400 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="Hammburger w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div className={`fixed inset-0 transition-transform h-[100vh] bg-white dark:bg-gray-800 duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50 flex flex-col items-end `}>
        <button
          className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-400 p-4"
          onClick={closeMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col w-full  items-end space-y-4 p-4   z-80">
          <Link href="/" className="hover:text-gray-500 dark:hover:text-gray-400" onClick={closeMenu}>Home</Link>
          <Link href="/about" className="hover:text-gray-500 dark:hover:text-gray-400" onClick={closeMenu}>About</Link>
          <Link href="/blog" className="hover:text-gray-500 dark:hover:text-gray-400" onClick={closeMenu}>Blog</Link>
          <Link href="/contact" className="hover:text-gray-500 dark:hover:text-gray-400" onClick={closeMenu}>Contact</Link>
          <div className="flex flex-col w-[80px] items-end gap-5">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default dynamic (()=> Promise.resolve(Navbar),{ssr: false})

// export default Navbar