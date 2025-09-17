import React from 'react';
// Importando ícones para as redes sociais
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#1c4659] text-[#f2f2f2]'>
      <div className='container mx-auto px-8 py-12'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>

          <div className='text-center md:text-left'>
            <h3 className='text-2xl font-bold'>Adec Transporte Executivo</h3>
            <p className='text-gray-400'>Soluções em Transporte Executivo</p>
          </div>

          <nav className='flex gap-6 font-semibold'>
            <a href="#" className='hover:text-[#e0d8c3] transition-colors'>Início</a>
            <a href="#" className='hover:text-[#e0d8c3] transition-colors'>Serviços</a>
            <a href="#" className='hover:text-[#e0d8c3] transition-colors'>Sobre Nós</a>
            <a href="#" className='hover:text-[#e0d8c3] transition-colors'>Contato</a>
          </nav>
        </div>

        <hr className='border-t border-gray-700 my-8' />

        <div className='text-center text-gray-400 text-sm'>
          <p>&copy; {currentYear} Nome da Empresa. Todos os direitos reservados.</p>
          <p className='mt-1'>
            Desenvolvido por <a href="#" className='underline hover:text-[#f2f2f2]'>Schell Web Services</a>
          </p>
        </div>
      </div>
    </footer>
  );
}