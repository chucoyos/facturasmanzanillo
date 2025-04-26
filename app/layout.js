import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sistema Facturación :: facturasmanzanillo.com",
  description: "Facturación electrónica en Manzanillo Colima, nómina, emite todo tipo de comprobante fiscal digital por internet (CFDI) de manera fácil y rápida, descarga tu XML y PDF, validación de CFDI, consulta de CFDI, cancelación de CFDI, sistema de facturación electrónica en línea.",
  keywords: "facturar en línea, Complemento Carta Porte, sistema de facturación electrónica, factura Electrónica CFDI, facturación electrónica, CFDI, PAC, factura electrónica, facturación electrónica, facturación electrónica en Manzanillo Colima, facturación electrónica en México, Validar CFDI, Descargar XML",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
