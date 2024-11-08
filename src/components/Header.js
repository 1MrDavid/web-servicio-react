import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const offset = 80; // Ajusta según la altura de tu header
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 w-full flex justify-between items-center bg-orange-600 p-4 shadow-md z-50">
      <img src="images/logo.svg" alt="Logo" className="w-40 h-12 sm:w-60 sm:h-16" />

      {/* Botón de menú en pantallas pequeñas */}
      <button 
        className="sm:hidden text-white text-2xl" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Menú desplegable en pantallas pequeñas */}
      <div className={`sm:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 bg-white rounded-lg shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col p-4 gap-3">
          <a onClick={handleScrollToTop} className="text-orange-600 hover:underline cursor-pointer">Inicio</a>
          <a onClick={() => handleScroll('section1')} className="text-orange-600 hover:underline cursor-pointer">Servicios</a>
          <a onClick={() => handleScroll('section2')} className="text-orange-600 hover:underline cursor-pointer">Sobre Nosotros</a>
          <a onClick={() => handleScroll('section3')} className="text-orange-600 hover:underline cursor-pointer">Contacto</a>
        </div>
      </div>

      {/* Menú de navegación en pantallas grandes */}
      <div className="sm:flex gap-5 hidden">
        <a onClick={handleScrollToTop} className="text-white hover:underline cursor-pointer">Inicio</a>
        <a onClick={() => handleScroll('section1')} className="text-white hover:underline cursor-pointer">Servicios</a>
        <a onClick={() => handleScroll('section2')} className="text-white hover:underline cursor-pointer">Sobre Nosotros</a>
        <a onClick={() => handleScroll('section3')} className="text-white hover:underline cursor-pointer">Contacto</a>
      </div>
    </header>
  );
}

