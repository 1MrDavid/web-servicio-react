import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center flex justify-center items-center">
      {/* Contenedor en fila */}
      <div className="flex gap-12 items-center">
        
        {/* Logo y copyright */}
        <div className="flex flex-col items-center">
          <img src="images/logo.svg" alt="Logo" className="w-40 h-auto mb-2" />
          <p className="text-sm">&copy; 2024 Reparaciones Moya. Todos los derechos reservados.</p>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold mb-1">Contáctanos</h3>
          <p className="text-sm">123-456-7890</p>
          <p className="text-sm">info@reparacionesmoya.com</p>
        </div>
      </div>
    </footer>
  );
}
