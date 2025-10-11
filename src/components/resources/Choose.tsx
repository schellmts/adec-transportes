import { chooseElements } from '@/utils/chooseCards';
import React from 'react';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';

const data = chooseElements;

export default function WhyChooseUs() {
    return (
        <section className="w-full py-16">
            {/* Título */}
            {/*<div className="text-left mb-10 max-w-4xl">*/}
            {/*    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-dark leading-tight">*/}
            {/*        Por Que Escolher a Adec?*/}
            {/*    </h2>*/}
            {/*</div>*/}

            {/* Grid de cards */}
            {/*<div className="bg-dark rounded-xl p-6 sm:p-8 md:p-12 mb-16">*/}
            {/*    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">*/}
            {/*        {data.map((item) => {*/}
            {/*            const Icon = item.icon;*/}

            {/*            return (*/}
            {/*                <div*/}
            {/*                    key={item.id}*/}
            {/*                    className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-left hover:shadow-lg transition-shadow"*/}
            {/*                >*/}
            {/*                    <h3 className="text-[#f2f2f2] text-lg sm:text-xl font-semibold mb-2">*/}
            {/*                        {item.title}*/}
            {/*                    </h3>*/}
            {/*                    <p className="text-[#f2f2f2] text-sm sm:text-base text-center sm:text-left">*/}
            {/*                        {item.description}*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            );*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Painel final */}
            <div className="bg-dark rounded-3xl w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center gap-6">
                <h2 className="text-light text-center text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
                    Somos referência em conforto, pontualidade e excelência no atendimento,
                    proporcionando uma experiência única e exclusiva.
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full">
                    <a
                        target={'_blank'} href={'https://wa.me/5542988748620?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os'}
                        className="flex items-center justify-center gap-2 text-[#f2f2f2] bg-[#59A25C] px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 w-full sm:w-auto text-center"
                    >
                        <FaWhatsapp size={20} />
                        <span className="font-semibold text-[17px]">Contato via Whatsapp</span>
                    </a>

                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 bg-light text-dark px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-300 w-full sm:w-auto text-center"
                    >
                        <FaCalendarAlt />
                        <span className="font-semibold text-[17px]">Solicitar Orçamento</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
