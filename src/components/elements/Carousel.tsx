'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';

const slides = [
    {
        image: '/component-1.png',
        title: 'Transporte Executivo',
        subtitle: 'Personalizado para Você',
        description: 'Serviço premium, seguro e confortável para clientes individuais e empresas.',
    },
    {
        image: '/component-1.png',
        title: 'Transporte Corporativo',
        subtitle: 'Para sua Empresa',
        description: 'Frota dedicada e motoristas treinados para atender colaboradores e clientes VIP.',
    },
    {
        image: '/component-1.png',
        title: 'Viagens Intermunicipais e Interestaduais',
        subtitle: 'Explore Novos Lugares',
        description: 'Transporte seguro e confortável entre cidades e estados, ideal para turismo ou negócios.',
    },
    {
        image: '/component-1.png',
        title: 'Receptivo em Aeroporto',
        subtitle: 'Chegue com Conforto',
        description: 'Monitoramento de voos e recepção personalizada no aeroporto, sem atrasos ou preocupações.',
    },
    {
        image: '/component-1.png',
        title: 'Motorista Particular',
        subtitle: 'Discrição e Segurança',
        description: 'Motoristas qualificados para trajetos diários, viagens corporativas ou lazer com total conforto.',
    },
    {
        image: '/component-1.png',
        title: 'Congressos e Eventos',
        subtitle: 'Transporte Eficiente',
        description: 'Logística otimizada para eventos, feiras e congressos, garantindo pontualidade e conforto.',
    },
    {
        image: '/component-1.png',
        title: 'Casamentos',
        subtitle: 'Elegância e Estilo',
        description: 'Transporte para noivos e convidados com veículos premium e motoristas com postura cerimonial.',
    },
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
        <div className="relative w-full h-screen overflow-hidden">
            <div className='z-20 relative'>
                <Navbar />
            </div>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0
                    }}
                >
                </div>
            ))}

            <div className="relative flex flex-col items-end justify-center h-full text-light text-end px-24 z-10">
                <div className="transition-all duration-700 ease-in-out transform">
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                        {slides[current].title} <br /> {slides[current].subtitle}
                    </h1>
                    <p className="mt-4 text-[#f2f2f2] text-lg md:text-3xl font-medium">
                        {slides[current].description}
                    </p>
                    <a
                        href="#contact"
                        className="mt-8 inline-block px-8 py-3 bg-transparent cursor-pointer border-2 border-white rounded-md text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Agende seu Serviço
                    </a>

                </div>
            </div>

            <button
                onClick={previousSlide}
                className="absolute left-4 cursor-pointer top-1/2 -translate-y-1/2 z-20 p-2 text-white bg-black/30 rounded-full hover:bg-black/50 transition"
            >
                <ChevronLeft size={32} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 z-20 p-2 text-white bg-black/30 rounded-full hover:bg-black/50 transition"
            >
                <ChevronRight size={32} />
            </button>

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
