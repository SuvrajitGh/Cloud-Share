"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="relative shadow">
        <div className="px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link href="/">
                <h1 className="font-bold text-xl">Cloud Share</h1>
              </Link>
              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-gray-500 hover:text-gray-600 dark:text-gray-400 focus-outline-none focus:text-gray-600 dark:focus:text-gray-400"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
            {/* Mobile Meny open:"block", Menu closed:"hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100 bg-white dark:bg-[#121212]"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              {/* rest of your code */}
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <Link
                  href="/pricing"
                  className="font-semibold px-3 py-2 mx-3 mt-2 hover:text-indigo-600"
                >
                  Pricing
                </Link>
                <Link href="/contact" className="font-semibold px-3 py-2 mx-3 mt-2 hover:text-indigo-600">
                  Contact
                </Link>
                <Link href="/" className="font-semibold px-3 py-2 mx-3 mt-2 hover:text-indigo-600">
                  Help
                </Link>
              </div>
              <div className="flex items-center mt-4 lg:mt-0">
                <div className="mr-4">
                  <ThemeToggler />
                </div>
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <Image alt="image" src="/user.jpg" width={34} height={34} />
                  </div>
                  <h3 className="mx-2 dark:text-gray-200 text-gray-700 lg:hidden font-semibold">
                    Suv Legend
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
