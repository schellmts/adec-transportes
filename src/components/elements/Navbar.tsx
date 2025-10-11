// Importando os ícones que vamos usar
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {NavbarMobile} from "@/components/elements/NavbarMobile";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'SOBRE NÓS', href: '#about' },
    { name: 'FROTA', href: '#cars' },
    { name: 'CONTATO', href: '#contact' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full flex items-center justify-between px-10 lg:px-20 text-light z-50
        transition-colors duration-300 ease-in-out
        ${isScrolled ? 'bg-dark backdrop-blur-md' : ''}
      `}
    >

      <Image
          src="/logo.png"
          alt="Adec Transporte Executivo Logo"
          width={150}
          height={50}
          className="py-5 w-auto"
      />
      <div className='flex items-center gap-8'>
        <ul className='hidden lg:flex items-center gap-8'>
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

        <div className='hidden lg:flex items-center gap-4'>
          <a
            href="#"
            className='flex items-center gap-2 text-[#f2f2f2] bg-[#59A25C] px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300'
          >
            <FaWhatsapp size={20} />
            <span className='font-semibold'>Whatsapp</span>
          </a>
          <a
            href="#contact"
            className='flex items-center gap-2 bg-gray-200 text-dark px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300'
          >
            <FaCalendarAlt />
            <span className='font-semibold'>Agendar</span>
          </a>
        </div>

        <div className='lg:hidden'>
            <NavbarMobile />
        </div>
      </div>
    </nav>
  );
}