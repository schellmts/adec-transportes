import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className='bg-dark p-16 md:p-32 text-[#f2f2f2]' id='contact'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-16'>

        <div className='w-full lg:w-1/2'>
          <h2 className='text-5xl font-bold leading-tight mb-4'>
            Fale com Nossos <br /> Especialistas
          </h2>
          <p className='text-lg mb-12'>
            Nossa Equipe está pronta para criar a solução de transporte executivo
            perfeita para suas necessidades específicas.
          </p>

          <div className='space-y-6'>
            <div>
              <h3 className='font-semibold text-light mb-2'>Telefones</h3>
              <div className='flex flex-col sm:flex-row gap-x-8 gap-y-2'>
                <a className='cursor-pointer flex items-center gap-3 text-lg hover:opacity-80 transition-opacity'>
                  <FaWhatsapp /> +55 42 99999-9999
                </a>
                <a className='cursor-pointer flex items-center gap-3 text-lg hover:opacity-80 transition-opacity'>
                  <FaWhatsapp /> +55 42 99999-9999
                </a>
              </div>
            </div>
            <div>
              <h3 className='font-semibold mb-2 opacity-75'>EMAIL</h3>
              <a href="mailto:adectransportesexecutivo@gmail.com" className='flex items-center gap-3 text-lg hover:opacity-80 transition-opacity'>
                <FaEnvelope /> adectransportesexecutivo@gmail.com
              </a>
            </div>
            <div>
              <h3 className='font-semibold mb-2 opacity-75'>ENDEREÇO</h3>
              <p className='flex items-center gap-3 text-lg'>
                <FaMapMarkerAlt /> Rua XV de Novembro, 43 <br /> Centro, Guarapuava, PR
              </p>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <div className='bg-[#1c4659] p-8 rounded-lg shadow-xl text-[#f2f2f2]'>
            <h3 className='text-2xl font-bold mb-2'>Pronto para Viajar com Excelência?</h3>
            <p className='mb-6 opacity-90'>Entre em contato e solicite uma cotação</p>

            <form action="#" method="POST" className='space-y-5'>
              {/* ... outros inputs ... */}
              <div>
                <input
                  type="text"
                  name="nome-completo"
                  id="nome-completo"
                  placeholder="Nome completo"
                  className='w-full bg-[#3e5965] border border-transparent rounded-md py-3 px-4 text-[#f2f2f2] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1b3c48] focus:ring-[#e0d8c3]'
                />
              </div>

              <div className='flex flex-col sm:flex-row gap-5'>
                <div className='w-full sm:w-1/2'>
                  <input
                    type="tel"
                    name="telefone"
                    id="telefone"
                    placeholder="Telefone"
                    className='w-full bg-[#3e5965] border border-transparent rounded-md py-3 px-4 text-[#f2f2f2] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1b3c48] focus:ring-[#e0d8c3]'
                  />
                </div>
                <div className='w-full sm:w-1/2'>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className='w-full bg-[#3e5965] border border-transparent rounded-md py-3 px-4 text-[#f2f2f2] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1b3c48] focus:ring-[#e0d8c3]'
                  />
                </div>
              </div>

              <div>
                {/* CORREÇÃO APLICADA AQUI */}
                <select
                  id="service-type"
                  name="service-type"
                  defaultValue="" // Define o valor inicial do select
                  className='w-full bg-[#3e5965] border border-transparent rounded-md py-3 px-4 text-[#f2f2f2] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1b3c48] focus:ring-[#e0d8c3]'
                >
                  {/* Adicionado value="" e removido 'selected' */}
                  <option value="" className="text-gray-400" disabled>Tipo de serviço</option>
                  <option value="Transporte Executivo" className="text-[#f2f2f2]">Transporte Executivo</option>
                  <option value="Viagens Corporativas" className="text-[#f2f2f2]">Viagens Corporativas</option>
                  <option value="Transfer Aeroporto" className="text-[#f2f2f2]">Transfer Aeroporto</option>
                  <option value="Eventos Especiais" className="text-[#f2f2f2]">Eventos Especiais</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Conte-nos sobre suas necessidades de transporte executivo..."
                  className='w-full bg-[#3e5965] border border-transparent rounded-md py-3 px-4 text-[#f2f2f2] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1b3c48] focus:ring-[#e0d8c3]'
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className='w-full cursor-pointer bg-[#e0d8c3] text-[#1b3c48] font-bold py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300'
                >
                  Solicitar Cotação Personalizada
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}