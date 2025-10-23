"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF,FaArrowUp, FaWhatsapp} from "react-icons/fa6";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1B3C53]  text-white text-center py-14 mt-12 w-full">
      <div className="text-white text-xl">©2025 <a
          href="https://github.com/Dideoluwa31"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#019a65] hover:text-[#017a50] px-2 font-medium transition-colors"
        >
          Asubiojo Oreoluwa
        </a>
 | All Rights Reserved</div>
      
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6  bg-gray-700 p-3 rounded-lg shadow-lg hover:bg-gray-600"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}
      <div className="text-white  text-lg">Developed with ❤️ for Infragenix</div>
    </footer>
  );
};

export default Footer;
