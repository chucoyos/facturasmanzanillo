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



// "use client";

// import { motion } from "framer-motion";
// import { FiPhone, FiMessageSquare, FiMail, FiMapPin } from "react-icons/fi";
// import { FaWhatsapp } from "react-icons/fa";
// import ContactForm from "./ContactForm";

// export default function ContactSection() {
//   const phoneNumber = "+523331112233"; // Replace with your number
//   const whatsappMessage = "Hola, estoy interesado en sus servicios de facturación electrónica";

//   return (
//     <section id="contacto" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
//             Contáctanos
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Estamos disponibles por múltiples canales
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
//           >
//             <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
//               Información de Contacto
//             </h3>

//             <div className="space-y-4">
//               {/* Phone Number */}
//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
//                   <FiPhone className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-700 dark:text-gray-300">Teléfono</h4>
//                   <a 
//                     href={`tel:${phoneNumber}`}
//                     className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                   >
//                     {phoneNumber}
//                   </a>
//                 </div>
//               </div>

//               {/* WhatsApp */}
//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
//                   <FaWhatsapp className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-700 dark:text-gray-300">WhatsApp</h4>
//                   <a
//                     href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
//                   >
//                     Enviar mensaje
//                   </a>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
//                   <FiMail className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-700 dark:text-gray-300">Email</h4>
//                   <a
//                     href="mailto:contacto@facturasmanzanillo.com"
//                     className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
//                   >
//                     contacto@facturasmanzanillo.com
//                   </a>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400">
//                   <FiMapPin className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-700 dark:text-gray-300">Oficina</h4>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     Av. Manzanillo #123, Col. Centro, Manzanillo, Colima
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form (Existing) */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <ContactForm /> {/* Your existing form component */}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }