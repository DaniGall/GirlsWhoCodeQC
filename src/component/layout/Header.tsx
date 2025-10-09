"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // If using Next.js for optimized images

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-white/90 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Image
            src="/images/GWC.png" // Replace with your logo path
            alt="Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
            className="cursor-pointer"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="Team"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
            >
              Team
            </Link>
            <Link
              href="About"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="Event"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
            >
              Events
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Link
            href="Team"
            className="block text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </Link>
          <nav className=" space-y-2 border-t border-gray-100 mt-1">
            <Link
              href="About"
              className="block text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
          <nav className=" space-y-2 border-t border-gray-100 mt-1">
            <Link
              href="Event"
              className="block text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
