"use client";

import { motion } from "framer-motion";
import {
  FaTractor,
  FaUsers,
  FaHotel,
  FaTools,
  FaTruck,
  FaLaptopCode,
  FaBuilding,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";

const services = [
  { name: "Agriculture", icon: <FaTractor className="text-4xl text-black" /> },
  { name: "Consultancy", icon: <MdOutlineBusinessCenter className="text-4xl text-black" /> },
  { name: "Human Capital", icon: <FaUsers className="text-4xl text-black" /> },
  { name: "Hospitality", icon: <FaHotel className="text-4xl text-black" /> },
  { name: "Construction", icon: <FaTools className="text-4xl text-black" /> },
  { name: "Logistics", icon: <FaTruck className="text-4xl text-black" /> },
  { name: "ICT Solutions", icon: <FaLaptopCode className="text-4xl text-black" /> },
  { name: "Real Estate", icon: <FaBuilding className="text-4xl text-black" /> },
  { name: "Training", icon: <FaChalkboardTeacher className="text-4xl text-black" /> },
];

export default function ServicesCarousel() {
  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1f888d] text-center mb-8">
        Our Services
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...services, ...services].map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center w-44 h-44 md:w-52 md:h-52 
                         rounded-full font-semibold text-lg text-gray-800 flex-shrink-0 
                         shadow-[0_0_25px_rgba(0,0,0,0.15)] hover:shadow-[0_0_35px_rgba(0,0,0,0.25)] 
                         transition-shadow duration-300"
              style={{ backgroundColor: "#DCDCDC" }}
            >
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-2"
              >
                {service.icon}
              </motion.div>
              <span>{service.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
