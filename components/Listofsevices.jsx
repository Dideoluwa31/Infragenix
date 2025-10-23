"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Listofservices() {
  const services = [
    {
      title: "Construction Services",
      img: "/sevices/construction.jpg",
      bg: "bg-[#0a0e0f]",
    },
    {
      title: "Agriculture and Agro-Allied Services",
      img: "/sevices/agriculture.jpg",
      bg: "bg-[#f2f2f2]",
    },
    {
      title:
        "Consultancy Service",
      img: "/sevices/consultancy.jpg",
      bg: "bg-[#0a0e0f]",
    },
    {
      title: "Hospitality and Recrational Services",
      img: "/sevices/hotel.jpg",
      bg: "bg-[#f2f2f2]",
    },
    {
      title: "Human Capital Solution and Recuitment",
      img: "/sevices/hr.jpg",
      bg: "bg-[#9ECFD4]",
    },
    {
      title: "ICT Solution",
      img: "/sevices/solar.jpg",
      bg: "bg-[#f2f2f2]",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 px-6 md:px-16 bg-gray-50"
      style={{ ["--brand"]: "#019a65" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Services
          </h3>
          <p className="mt-3 text-black text-xl max-w-2xl mx-auto">
            Kevlar Telecoms provides a full spectrum of ICT and telecommunications services designed to deliver reliable, sustainable, and innovative solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`rounded-2xl ${service.bg} shadow-sm hover:shadow-xl overflow-hidden border border-transparent hover:border-[var(--brand)] group transition-all`}
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              <div className="p-5 flex flex-col">
                <h4
                  className={`font-semibold text-lg ${
                    service.bg.includes("0a0e0f") || service.bg.includes("222")
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h4>
                <div className="w-8 h-1 bg-green-600 mb-6"></div>
              </div>
              <button
                className="px-6 py-2 rounded-md font-medium text-sm w-fit bg-[#019a65] text-white hover:bg-green-800">
                Explore
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
