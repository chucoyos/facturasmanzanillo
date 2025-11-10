"use client";

import { motion } from "framer-motion";
import { FiDollarSign, FiShoppingCart } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function PricingSection() {
  const packages = [
    {
      name: "10 Folios",
      price: "$100",
      description: "Paquete básico para emisión ocasional de facturas",
      recommended: false
    },
    {
      name: "20 Folios",
      price: "$200",
      description: "Ideal para freelancers y pequeños emprendedores",
      recommended: false
    },
    {
      name: "50 Folios",
      price: "$350",
      description: "Ideal para pequeños negocios con volumen moderado",
      recommended: false
    },
    {
      name: "100 Folios",
      price: "$600",
      description: "El mejor valor para negocios con alta facturación",
      recommended: true
    },
    {
      name: "200 Folios",
      price: "$1,060",
      description: "Para empresas con gran volumen de operaciones",
      recommended: false
    },
    {
      name: "500 Folios",
      price: "$1,800",
      description: "Paquete premium para empresas grandes",
      recommended: false
    },
    {
      name: "1,000 Folios",
      price: "$3,100",
      description: "Paquete completo para empresas con alta demanda",
      recommended: false
    },
    {
      name: "Paquete Personalizado",
      price: "Consultar",
      description: "Paquetes personalizados para empresas grandes",
      recommended: false
    }
  ];

  const handleWhatsAppPurchase = (packageName) => {
    const message = `Estoy interesado en comprar el paquete ${packageName}. Por favor envíeme información para completar la compra.`;
    window.open(`https://wa.me/523141352209?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-200" id="precios">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Precios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Paquetes flexibles adaptados a las necesidades de tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden shadow-lg border ${
                pkg.recommended 
                  ? "border-blue-500 dark:border-blue-600 ring-2 ring-blue-200 dark:ring-blue-900" 
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                  RECOMENDADO
                </div>
              )}
              
              <div className="p-6 bg-white dark:bg-gray-800 h-full flex flex-col">
                <div className="mb-4">
                  <FiDollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {pkg.name}
                  </h3>
                </div>
                
                <div className="mb-6 flex-1">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.price}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {pkg.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    IVA incluido
                  </p>
                </div>
                
                <button
                  onClick={() => handleWhatsAppPurchase(pkg.name)}
                  className="cursor-pointer w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Comprar Folios</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}