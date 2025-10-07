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
    <footer className="relative bg-white border border-[#1f888d] text-gray-200 text-center py-6 mt-12 w-full">
      <div className="text-[#1f888d] text-xl">©2025 Asubiojo Oreoluwa | All Rights Reserved</div>
      <div className="flex justify-center space-x-3 mt-4">
        
        <Link href="https://facebook.com/skyboundlegal?s=21" className="bg-gray-800 p-2 rounded-lg text-white hover:bg-gray-700">
          <FaFacebookF />
        </Link>
        <Link href="https://wa.me//+2349167610059" className="bg-gray-800 p-2 rounded-lg text-white hover:bg-gray-700">
          <FaWhatsapp />
        </Link>
        

      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6  bg-gray-700 p-3 rounded-lg shadow-lg hover:bg-gray-600"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}
      <div className="text-[#1f888d] text-sm">Developed with ❤️ for Infragenix</div>
    </footer>
  );
};

export default Footer;
