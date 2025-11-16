"use client";

import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

export default function ContactForm() {
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
      
      <form 
        action={`https://formsubmit.co/${encodeURIComponent('facturasmanzanillo@hotmail.com')}`} 
        method="POST"
        className="space-y-4"
      >
        {/* Hidden FormSubmit fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nuevo mensaje de facturación" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://facturasmanzanillo.com/gracias" />

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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Estoy interesado en..."
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="cursor-pointer w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
        >
          Enviar Mensaje
        </motion.button>
      </form>
    </motion.div>
  );
}
