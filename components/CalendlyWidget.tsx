// components/CalendlyWidget.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding?: boolean;
      }) => void;
      destroyBadgeWidget: () => void;
    };
  }
}

export default function CalendlyWidget() {
  const pathname = usePathname();

  useEffect(() => {
    // Solo mostrar en la página principal
    if (pathname !== "/") return;

    const head = document.querySelector("head");
    if (!head) return;

    // Cargar script de Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    
    // Cargar CSS de Calendly
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";

    const initWidget = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/david-davila-dev/30min",
          text: "Agendar Cita",
          color: "#634d99",
          textColor: "#ffffff",
          branding: false
        });

        // Estilo para el icono
        const style = document.createElement("style");
        style.innerHTML = `
          .calendly-badge-content {
            display: flex !important;
            align-items: center !important;
          }
          .calendly-badge-content::before {
            content: "" !important;
            display: inline-block !important;
            width: 20px !important;
            height: 20px !important;
            margin-right: 8px !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z'/%3E%3C/svg%3E") !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
          }
          
          /* Ocultar cualquier elemento de branding */
          .calendly-powered-by, [data-powered-by="calendly"] {
            display: none !important;
          }
        `;
        head.appendChild(style);
      }
    };

    script.onload = initWidget;
    head.appendChild(script);
    head.appendChild(link);

    return () => {
      // Limpieza completa al desmontar o cambiar de página
      if (window.Calendly) {
        window.Calendly.destroyBadgeWidget();
      }
      
      // Eliminar elementos del DOM
      document.querySelectorAll('.calendly-badge-widget').forEach(el => el.remove());
      
      // Eliminar scripts y estilos
      head.removeChild(script);
      head.removeChild(link);
      
      // Eliminar estilos dinámicos
      document.querySelectorAll('style').forEach(el => {
        if (el.innerHTML.includes('calendly-badge-content')) {
          head.removeChild(el);
        }
      });
    };
  }, [pathname]); // Se ejecuta cuando cambia la ruta

  return null;
}