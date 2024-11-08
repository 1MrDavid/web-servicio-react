import React from 'react';

export default function SectionTwo() {
  return (
    <section id="section2" className="p-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="w-full sm:w-1/2 text-center">
          <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-lg mb-4 max-w-[500px] mx-auto">
            Con más de 20 años de experiencia en reparación, mantenimiento y asesoramiento de computadoras, nuestra empresa se ha consolidado como un referente en el sector. Nos especializamos en ofrecer soluciones tecnológicas personalizadas para satisfacer las necesidades tanto de clientes particulares como de empresas. Nuestro equipo de expertos está comprometido en brindar un servicio de calidad, asegurando que tus equipos funcionen de manera óptima.
          </p>
        </div>

        <div className="w-full sm:w-1/2">
          <img 
            src="/images/about.jpg" 
            alt="Sobre Nosotros" 
            className="w-full h-auto max-w-[500px] max-h-[400px] rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

