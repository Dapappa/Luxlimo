"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Logo from "@/components/ui/Logo";

// Primary navigation items that will always be visible
const primaryNavigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Areas We Serve", href: "/areas-we-serve" },
];

// Secondary navigation items that will go in the dropdown
const secondaryNavigation = [
  { name: "Tours & Experiences", href: "/tours-and-experiences" },
  { name: "G7 Summit Transfers", href: "/g7-transfers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [scrolled]);

  return (
    <nav
      className={clsx(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-secondary-dark bg-opacity-95 shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="sr-only">Lux Limousine</span>
              <Logo size="small" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-primary px-1 py-2 transition-colors text-sm uppercase tracking-wider"
                >
                  {item.name}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-gray-300 hover:text-primary px-1 py-2 transition-colors text-sm uppercase tracking-wider flex items-center"
                >
                  More
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>

                {/* Dropdown menu */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-secondary-dark border border-gray-700 rounded-md shadow-lg py-1 z-10"
                    >
                      {secondaryNavigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-secondary hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/booking"
                className="bg-primary text-secondary-dark px-4 py-2 rounded text-sm uppercase font-medium tracking-wider hover:bg-primary-dark transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary-dark bg-opacity-95 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile: Show secondary navigation directly */}
              {secondaryNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="block mt-4 w-full text-center bg-primary text-secondary-dark px-4 py-2 rounded text-base font-medium hover:bg-primary-dark transition-colors"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
