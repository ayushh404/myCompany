'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Client Speak", href: "/clientspeak" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contactus" },
    { label: "Articles and News", href: "/articles" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Main Navbar */}
      <nav className="bg-white shadow-md h-24 flex items-center px-5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-700">
              <Link href="/">MyCompany</Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center space-y-1"
            >
              <span
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`flex items-start md:hidden w-full bg-blue-600 text-white absolute left-0 ${
          isOpen ? "h-[calc(100vh-5rem)]" : "h-0"
        } overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-8 py-8 text-2xl font-medium">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-red-300 transition-colors duration-300"
              style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
