"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // WhatsApp number (include country code, no + sign or spaces)
  const whatsappNumber = "+905391043822"; // Example: +234 809 524 5525

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    // Format the message
    const text = `Hello, my name is ${form.name}.
Email: ${form.email}
Phone: ${form.phone}
Subject: ${form.subject}

Message:
${form.message}`;

    // Encode and open WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="bg-white text-gray-800">
      {/* Contact Channels */}
      <div className="py-12 px-6 md:px-20">
        <p className="text-center text-2xl font-bold text-gray-600 mb-10">
          CONTACT US VIA THE AVAILABLE CHANNELS
        </p>

        <div className="grid md:grid-cols-3 h-full gap-6 text-center">
          {/* Office */}
          <div className="bg-gray-900 text-white p-4 rounded-xl shadow-lg">
            <div className="text-yellow-400 text-4xl mb-4">📍</div>
            <h3 className="font-semibold text-lg mb-2">VISIT OUR OFFICE</h3>
            <p>
              VILLA 1, MACCAT VILLAS, APO ZONE E, <br />LEGISLATIVE QTRS,ABUJA , FCT, NIGERIA
              
            </p>
          </div>

          {/* Email */}
          <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
            <div className="text-yellow-400 text-4xl mb-4">✉</div>
            <h3 className="font-semibold text-lg mb-2">EMAIL US</h3>
            <p>admin@infragenixng.com</p>
          </div>

          {/* Call */}
          <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg">
            <div className="text-yellow-400 text-4xl mb-4">📞</div>
            <h3 className="font-semibold text-lg mb-2">CALL US</h3>
            <p>+234 806 026 9768</p>
            
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9082.022892327523!2d7.477494922554167!3d9.002083261097578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0d7cec2e0ff5%3A0xe07009cb420e5bef!2sMACCATT%20VILLAS!5e1!3m2!1sen!2sng!4v1759234092692!5m2!1sen!2sng"
          className="w-full h-full md:h-96 px-25 rounded-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      
      {/* Contact Form */}
      <div className="py-12 px-6 md:px-20">
        <h2 className="text-center text-[#1f888d] text-2xl font-semibold mb-6">
          WE LOVE TO HEAR FROM YOU
        </h2>
        <form
          onSubmit={handleSendWhatsApp}
          className="max-w-4xl mx-auto grid gap-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-3 rounded-lg w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-3 rounded-lg w-full"
              required
            />
          </div>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border p-3 rounded-lg w-full"
          />
          <textarea
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="border p-3 rounded-lg w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#1f888d] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition"
          >
            SEND VIA WHATSAPP
          </button>
        </form>
      </div>
    </section>
  );
}
