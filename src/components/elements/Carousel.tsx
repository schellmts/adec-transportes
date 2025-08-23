'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/component-1.png',
    title: 'Transporte Executivo Personalizado',
    subtitle: 'Para Cada Necessidade',
    description: 'Com segurança, eficiência e conforto garantidos.',
  },
  // {
  //   image: 'https://placehold.co/1920x1080/4a5568/ffffff?text=Imagem+2',
  //   title: 'Frota Moderna e Equipada',
  //   subtitle: 'Veículos de Luxo',
  //   description: 'Nossos veículos são novos e equipados para seu máximo conforto.',
  // },
  // {
  //   image: 'https://placehold.co/1920x1080/718096/ffffff?text=Imagem+3',
  //   title: 'Motoristas Profissionais',
  //   subtitle: 'Segurança em Primeiro Lugar',
  //   description: 'Equipe de motoristas experientes e altamente qualificados.',
  // },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [current]);


  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-light text-center px-4">
        <div className="transition-all duration-700 ease-in-out transform" style={{ transform: `translateY(${current === 0 ? '0' : '20px'})`, opacity: current === 0 ? 1 : 0 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {slides[current].title} <br /> {slides[current].subtitle}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            {slides[current].description}
          </p>
          <button className="mt-8 px-8 py-3 bg-transparent border-2 border-white rounded-md text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            Agende seu Serviço
          </button>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
        <button
          onClick={previousSlide}
          className="p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${index === current ? 'bg-white w-8' : 'bg-white/50'
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
