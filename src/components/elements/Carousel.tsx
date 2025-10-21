'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';

const slides = [
    {
        image: '/component-1.png',
        title: 'Transporte Executivo',
        subtitle: '',
        description: 'Serviço premium e personalizado para atender as necessidades de cada cliente.',
    },
    {
        image: '/component-1.png',
        title: 'Transporte Corporativo',
        subtitle: '',
        description: 'Frota dedicada e motoristas treinados para atender colaboradores e clientes VIP.',
    },
    {
        image: '/component-1.png',
        title: 'Receptivo em Aeroportos',
        subtitle: '',
        description: 'Recepção e suporte profissional em aeroportos garantindo um atendimento eficiente e seguro.',
    }
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
        const slideInterval = setInterval(nextSlide, 6000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col">
            {/* Navbar fixo */}
            <div className="absolute top-0 left-0 w-full z-20">
                <Navbar />
            </div>

            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
            ))}

            {/* Conteúdo centralizado */}
            <div className="relative z-10 flex flex-col items-end justify-center h-full text-right text-light px-6 sm:px-12 md:px-24">
                <div className="max-w-[90%] sm:max-w-[70%] md:max-w-[50%] transition-all duration-700 ease-in-out transform">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight drop-shadow-lg">
                        {slides[current].title} <br /> {slides[current].subtitle}
                    </h1>
                    <p className="mt-4 text-[#f2f2f2] text-base sm:text-xl md:text-2xl font-medium drop-shadow-md">
                        {slides[current].description}
                    </p>
                    <a
                        href="#contact"
                        className="mt-8 inline-block px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-white rounded-md text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Agende seu Serviço
                    </a>
                </div>
            </div>

            {/* Botões laterais */}
            <button
                onClick={previousSlide}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-2 text-white bg-black/30 rounded-full hover:bg-black/50 transition"
            >
                <ChevronLeft size={28} className="sm:w-8 sm:h-8" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1 sm:p-2 text-white bg-black/30 rounded-full hover:bg-black/50 transition"
            >
                <ChevronRight size={28} className="sm:w-8 sm:h-8" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-10 flex justify-center gap-1 sm:gap-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 sm:h-3 w-2 sm:w-3 rounded-full cursor-pointer transition-all duration-300 ${
                            index === current ? 'bg-white w-6 sm:w-8' : 'bg-white/50'
                        }`}
                    ></div>
                ))}
            </div>
        </section>
    );
}
