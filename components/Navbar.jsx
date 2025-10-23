"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home", href: "/#home" },
    { name: "About", id: "about", href: "/#about" },
    { name: "Services", id: "services", href: "/#services" },
    { name: "Contact", id: "contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        navBg ? "bg-[#F6FFF6] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="max-w-7xl h-20 flex justify-between items-center px-4">
          
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/infralogo2-removebg-preview (1).png"
              alt="infragenix Logo"
              width={120}
              height={120}
              className="object-contain cursor-pointer transform transition-transform duration-500 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) =>
              isHomePage ? (
                <ScrollLink
                  key={link.name}
                  to={link.id}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  spy={true}
                  className="cursor-pointer bg-white hover:bg-[#1f888d] text-[#1f888d] hover:text-white font-semibold px-5 py-2 rounded-full text-lg"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="cursor-pointer bg-white hover:bg-green-700 text-green-900 hover:text-white font-semibold px-5 py-2 rounded-full text-lg"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full md:hidden text-green-900 shadow-md bg-[#F6FFF6] transition-all duration-300">
            {navLinks.map((link) =>
              isHomePage ? (
                <ScrollLink
                  key={link.name}
                  to={link.id}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  spy={true}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-green-700 hover:text-white cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-green-700 hover:text-white"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
