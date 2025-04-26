"use client"
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 max-w-6xl mx-auto text-center"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Facturación Electrónica
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Contabilidad Electrónica, Facturación Ilimitada y Sofware Contable Gratis.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        
        <a href="https://auth.facturador.com/partiallogin?signin=880eb18aabed2d7ae09aea15b8f3d085"
            className='bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2'
            target="_blank">
          Iniciar Sesión
        </a>
      </motion.div>

    </motion.section>
  );
}