import React from 'react';
import ServiceCard from './Service-Card';

export default function SectionOne() {
  return (
    <section id="section1" className="p-8 bg-gray-100 pt-20 -mt-20">
      <h2 className="text-2xl font-bold center mb-10">Nuestros Servicios</h2>

    <div className='flex flex-wrap justify-center gap-6'>
      <ServiceCard 
        image="/images/service1.jpg"
        title="Reparación"
        text="Servicio de reparación profesional para tu computador."
      />

      <ServiceCard 
        image="/images/service2.jpg"
        title="Mantenimiento"
        text="Mantenimiento preventivo y correctivo para asegurar el buen funcionamiento de tus equipos."
      />

      <ServiceCard 
        image="/images/service3.jpeg"
        title="Asesoramiento"
        text="Asesoría personalizada para elegir las mejores soluciones tecnológicas para tu negocio o hogar."
      />
    </div>

    </section>
  );
}
