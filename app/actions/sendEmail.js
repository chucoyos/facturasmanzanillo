"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function sendContactEmail(formData) {
  try {
    // Extract form data
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Todos los campos son requeridos",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Por favor ingrese un correo electrónico válido",
      };
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Sistema de Contacto <onboarding@resend.dev>", // Default Resend sender for testing
      to: [process.env.CONTACT_EMAIL || "facturasmanzanillo@hotmail.com"],
      subject: "Nuevo mensaje de facturación",
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .content {
                background-color: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .header {
                color: #2563eb;
                border-bottom: 2px solid #2563eb;
                padding-bottom: 10px;
                margin-bottom: 20px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #555;
              }
              .value {
                margin-top: 5px;
                padding: 10px;
                background-color: #f3f4f6;
                border-radius: 4px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="content">
                <h2 class="header">Nuevo mensaje de contacto</h2>
                
                <div class="field">
                  <div class="label">Nombre:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Correo electrónico:</div>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">Mensaje:</div>
                  <div class="value">${message.replace(/\n/g, "<br>")}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        error: "Error al enviar el mensaje. Por favor intente nuevamente.",
      };
    }

    return {
      success: true,
      message: "Mensaje enviado exitosamente. Nos pondremos en contacto pronto.",
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      error: "Error inesperado. Por favor intente nuevamente más tarde.",
    };
  }
}
