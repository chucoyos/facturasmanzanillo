"use client";

import { motion } from "framer-motion";
import {
  FiFileText,
  FiCreditCard,
  FiDownload,
  FiBook,
  FiDatabase,
  FiTruck,
  FiCheckCircle
} from "react-icons/fi";
import { 
  FaMoneyBillWave,
  FaReceipt,
  FaFileInvoice,
  FaLandmark,
  FaLayerGroup,
  FaCloudUploadAlt,
  FaCloudDownloadAlt,
  FaAccusoft,
  FaWhatsapp,
 } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      icon: <FaFileInvoice className="w-16 h-16 mx-auto cursor-pointer" />,
      title: "Facturación Electrónica",
      description: "Emite tus facturas y todo tipo de comprobante fiscal."
    },
    {
      icon: <FaLayerGroup className="w-16 h-16 mx-auto" />,
      title: "Servicio de Timbrado de Nómina",
      description: "Emite tus recibos de nómina de sueldos y asimilados."
    },
    {
      icon: <FaMoneyBillWave className="w-16 h-16 mx-auto" />,
      title: "Complemento de Pago",
      description: "Emite tus complementos de pago y envíalos a tus clientes por correo electrónico."
    },
    {
      icon: <FaCloudDownloadAlt className="w-16 h-16 mx-auto" />,
      title: "Descarga del SAT",
      description: "Descarga tus facturas de gastos directamente del SAT y exporta a excel."
    },
    {
      icon: <FaAccusoft className="w-16 h-16 mx-auto" />,
      title: "Contabilidad Electrónica",
      description: "Generación de archivos para contabilidad electrónica"
    },
    {
      icon: <FaLandmark className="w-16 h-16 mx-auto" />,
      title: "Software Contable",
      description: "Administra y visualiza de forma gráfica el desempeño de tu empresa."
    },
    {
      icon: <FiTruck className="w-16 h-16 mx-auto" />,
      title: "Complemento Carta Porte",
      description: "Generación de CFDI con complemento carta porte"
    },
    {
      icon: <FiCheckCircle className="w-16 h-16 mx-auto" />,
      title: "Valida Facturas de Gastos",
      description: "Validación de comprobantes fiscales"
    }
  ];

  const handleWhatsAppClick = (service) => {
    const message = `Estoy interesado en el servicio de ${service}. Por favor envíeme más información.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/523141352209?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <button
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="cursor-pointer w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Contactar</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}