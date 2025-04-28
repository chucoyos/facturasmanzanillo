"use client";

import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactInfo() {
  const phoneNumber = "+523141352209"; // Replace with your number
  const whatsappMessage = "Estoy interesado en el sistema de facturación electrónica";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
    >
      {/* Phone Number */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center gap-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
      >
        <FiPhone className="w-5 h-5" />
        <span className="font-medium">{phoneNumber}</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
      >
        <FaWhatsapp className="w-5 h-5" />
        <span className="font-medium">Contactar por WhatsApp</span>
      </a>
    </motion.div>
  );
}