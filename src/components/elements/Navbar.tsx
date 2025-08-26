import React from 'react';
// Importando os ícones que vamos usar
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

export default function Navbar() {
  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'SOBRE NÓS', href: '#' },
    { name: 'FROTA', href: '#' },
    { name: 'CONTATO', href: '#' },
    { name: 'SERVIÇOS', href: '#' },
  ];

  return (
    <nav className='fixed top-0 left-0 w-full flex items-center justify-between px-20 text-light z-50'>

      <img src="/logo.png" alt="Adec Transporte Executivo Logo" className=" p-5 w-auto" />
      <div className='flex items-center gap-8'>
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className='text-sm font-medium tracking-wider hover:text-gray-300 transition-colors duration-300'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex items-center gap-4'>
          <a
            href="#"
            className='flex items-center gap-2 text-[#f2f2f2] bg-[#59A25C] px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300'
          >
            <FaWhatsapp size={20} />
            <span className='font-semibold'>Whatsapp</span>
          </a>
          <a
            href="#"
            className='flex items-center gap-2 bg-gray-200 text-dark px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300'
          >
            <FaCalendarAlt />
            <span className='font-semibold'>Agendar</span>
          </a>
        </div>

        <div className='md:hidden'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>


    </nav>
  );
}