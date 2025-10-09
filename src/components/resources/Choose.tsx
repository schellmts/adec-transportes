import { chooseElements } from '@/utils/chooseCards';
import React from 'react';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';

const data = chooseElements

export default function WhyChooseUs() {
  return (
    <div>
      <div className="text-left mb-8">
        <h2 className='text-5xl font-semibold pb-5 text-dark'>Por Que Escolher a Adec?</h2>
      </div>

      <div className="bg-dark rounded-xl p-8 md:p-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {data.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-left">
                <h3 className="text-[#f2f2f2] text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#f2f2f2] text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-dark rounded-3xl gap-6 w-2/3 w-full mt-20 p-8 md:p-12 flex flex-col items-center justify-center">
        <h2 className='text-light text-center text-3xl font-semibold'>Somos referência em conforto, pontualidade e excelência no atendimento, proporcionando uma experiência única e exclusiva.</h2>
        <div className='flex items-center gap-4'>
          <a
            href="#"
            className='flex items-center gap-2 text-[#f2f2f2] bg-[#59A25C] px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300'
          >
            <FaWhatsapp size={20} />
            <span className='font-semibold text-[17px]'>Contato via Whatsapp</span>
          </a>
          <a
            href="#contact"
            className='flex items-center gap-2 bg-light text-dark px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-300'
          >
            <FaCalendarAlt />
            <span className='font-semibold text-[17px]'>Solicitar Orçamento</span>
          </a>
        </div>
      </div>
    </div>
  );
}