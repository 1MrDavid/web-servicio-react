import React, { useEffect } from 'react';

export default function Carousel() {
  useEffect(() => {
    const M = window.M;
    const carouselElements = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElements, {
      duration: 150,
      dist: -60, // Ajusta la distancia para que las imágenes se vean un poco más grandes
      shift: 5,
      padding: 5,
      numVisible: 3, // Mantén tres imágenes visibles
    });
  }, []);

  return (
    <section className="flex flex-wrap items-center justify-between pt-20 pb-20">
      {/* Carrusel de imagenes */}
      <div className="container w-full md:w-1/2">
        <div className="carousel center-align">
          <div className="carousel-item select-none" style={{ maxWidth: '300px', width: '100%' }}>
            <img src="/images/image1.jpg" alt="imagen1" className="w-full h-auto" />
          </div>

          <div className="carousel-item select-none" style={{ maxWidth: '300px', width: '100%' }}>
            <img src="/images/image2.jpg" alt="imagen2" className="w-full h-auto" />
          </div>

          <div className="carousel-item select-none" style={{ maxWidth: '300px', width: '100%' }}>
            <img src="/images/image3.jpg" alt="imagen3" className="w-full h-auto" />
          </div>

          <div className="carousel-item select-none" style={{ maxWidth: '300px', width: '100%' }}>
            <img src="/images/image4.jpg" alt="imagen4" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <h2 className="text-lg leading-relaxed text-center max-w-[500px]">
        Los mejores expertos dispuestos a ofrecer el mejor servicio de reparación, armado y mantenimiento de computadoras tanto para clientes particulares como para empresas. 
        Nuestro equipo está altamente capacitado y comprometido en brindar soluciones tecnológicas eficientes. 
        Nos enfocamos en asegurar el óptimo funcionamiento de tus dispositivos, ofreciendo un servicio confiable y de calidad que se ajusta a las necesidades de cada cliente.
        </h2>
      </div>

    </section>
  );
}
