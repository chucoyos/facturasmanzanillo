"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { sendContactEmail } from "../actions/sendEmail";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const result = await sendContactEmail(formData);

      if (result.success) {
        alert(result.message);
        e.target.reset();
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert("Error inesperado. Por favor intente nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Contáctanos
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Nombre Completo
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiUser className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={isSubmitting}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Juan Pérez"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Correo Electrónico
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiMail className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              required
              disabled={isSubmitting}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="juan@empresa.com"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Mensaje
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-3 pointer-events-none">
              <FiMessageSquare className="text-gray-500 dark:text-gray-400" />
            </div>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              disabled={isSubmitting}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Estoy interesado en..."
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </motion.button>
      </form>
    </motion.div>
  );
}
