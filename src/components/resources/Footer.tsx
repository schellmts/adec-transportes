import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-[#1c4659] text-[#f2f2f2]">
        <div className="container mx-auto px-6 py-12">

          {/* Top: Logo + Nav + Redes */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Logo */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">Adec Transporte Executivo</h3>
              <p className="text-gray-400">Soluções em Transporte Executivo</p>
            </div>

            {/* Navegação */}
            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-semibold text-center">
              <a href="#" className="hover:text-[#e0d8c3] transition-colors">Início</a>
              <a href="#about" className="hover:text-[#e0d8c3] transition-colors">Sobre Nós</a>
              <a href="#cars" className="hover:text-[#e0d8c3] transition-colors">Frota</a>
              <a href="#contact" className="hover:text-[#e0d8c3] transition-colors">Contato</a>
            </nav>

            {/* Redes sociais */}
            {/*<div className="flex gap-4 mt-4 md:mt-0">*/}
            {/*  <a href="#" className="hover:text-[#e0d8c3] transition-colors">*/}
            {/*    <FaInstagram size={24} />*/}
            {/*  </a>*/}
            {/*  <a href="#" className="hover:text-[#e0d8c3] transition-colors">*/}
            {/*    <FaFacebook size={24} />*/}
            {/*  </a>*/}
            {/*  <a href="#" className="hover:text-[#e0d8c3] transition-colors">*/}
            {/*    <FaLinkedin size={24} />*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>

          <hr className="border-t border-gray-700 my-8" />

          {/* Bottom: Copyright */}
          <div className="text-center text-gray-400 text-sm space-y-1">
            <p>&copy; {currentYear} Adec Transporte Executivo. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por <a href="#" className="underline hover:text-[#f2f2f2]">Schell Web Services</a>
            </p>
          </div>
        </div>
      </footer>
  );
}
