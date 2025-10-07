"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";



const slides = [
  {
    image: "/assets/landingpage/infragenixagric.jpg",
    text: (
      <>
        <span className="block text-3xl sm:text-2xl md:text-4xl font-bold font-[Inter]">
          INFRAGENIX NIGERIAN LIMITED
        </span>
        <span className="block italic text-base sm:text-2xl md:text-3xl text-[#2dd9e1] font-[Playfair_Display] mt-2">
          Agriculture and Agro-Allied Services
        </span>
      </>
    ),
  },
  {
    image: "/assets/landingpage/infragenixconsult.jpg",
    text: (
      <>
        <span className="block text-xl sm:text-2xl md:text-4xl font-extrabold font-[Inter]">
          INFRAGENIX NIGERIAN LIMITED
        </span>
        <span className="block italic text-base sm:text-2xl text-[#2dd9e1] font-[Playfair_Display] mt-2">
          Consultancy Services
        </span>
      </>
    ),
  },
  {
    image: "/assets/landingpage/infragenixhumancap.jpg",
    text: (
      <>
        <span className="block text-xl sm:text-2xl md:text-4xl font-bold font-[Inter]">
          INFRAGENIX NIGERIAN LIMITED
        </span>
        <span className="block italic text-base sm:text-2xl text-[#2dd9e1] font-[Playfair_Display] mt-2">
          Human Capital Solutions and Recruitment
        </span>
      </>
    ),
  },
  {
    image: "/assets/landingpage/infragenixrecreation.jpg",
    text: (
      <>
        <span className="block text-xl sm:text-2xl md:text-4xl font-bold font-[Inter]">
          INFRAGENIX NIGERIAN LIMITED
        </span>
        <span className="block italic text-base sm:text-2xl text-[#2dd9e1] font-[Playfair_Display] mt-2">
          Hospitality and Recreational Services
        </span>
      </>
    ),
  },
  {
    image: "/assets/landingpage/inragenixconstruction.jpg",
    text: (
      <>
        <span className="block text-xl sm:text-2xl md:text-4xl font-bold font-[Inter]">
          INFRAGENIX NIGERIAN LIMITED
        </span>
        <span className="block italic text-base sm:text-2xl text-[#2dd9e1] font-[Playfair_Display] mt-2">
          Construction Services
        </span>
      </>
    ),
  },
];

export default function LandingPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background slideshow */}
      <AnimatePresence>
        <motion.div
          key={slides[index].image}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[index].image})`,
            filter: "brightness(1.2) contrast(1.1)",
          }}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          exit={{ scale: 1, opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Black transparent full overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* White translucent rectangle with text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="
              bg-white/20 
              backdrop-blur-md 
              rounded-xl 
              shadow-lg 
              border border-white/30 
              w-[90%] max-w-5xl 
              h-[300px] 
              flex flex-col items-center justify-center 
              text-center
            "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="leading-snug text-white">{slides[index].text}</h1>

            <Link href="/ContactUs.jsx">
              <button className="mt-6 sm:mt-8 bg-[#1f888d] text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-xl shadow-md hover:bg-[#2dd9e1] transition text-sm sm:text-base">
                Contact us
              </button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
