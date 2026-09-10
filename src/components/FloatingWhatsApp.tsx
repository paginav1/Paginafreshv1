import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      <div className="hidden sm:block bg-stone-900 text-white text-xs py-1.5 px-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        ¿Dudas con tu pedido? ¡Escríbenos!
      </div>
      
      <a
        href="https://wa.me/573216920138?text=Hola%20Fresh%20Pick%20Frutas!%20Quisiera%20asesor%C3%ADa%20para%20un%20pedido%20de%20frutas%20frescas."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-950/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  );
};
