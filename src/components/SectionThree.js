import React from 'react';

export default function SectionThree() {
  return (
    <section id="section3" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Contacto</h2>
      <p className="text-center mb-8">Si tienes alguna pregunta o comentario, por favor llena el siguiente formulario y nos pondremos en contacto contigo pronto.</p>

      <div className="max-w-4xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="mt-2 p-3 w-full border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Ingresa tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="mt-2 p-3 w-full border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Ingresa tu correo electrónico"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensaje</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="mt-2 p-3 w-full border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Escribe tu mensaje aquí"
            />
          </div>

          <div className="flex justify-center">
            <button 
              type="submit" 
              className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
