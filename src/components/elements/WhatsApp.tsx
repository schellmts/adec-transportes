import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsApp() {
  return (
    <a href="https://wa.me/5542988748620?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os"
         target="_blank" className='text-5xl inline-block text-white bg-[#59A25C] p-4 rounded-full hover:bg-green-600 cursor-pointer duration-300'>
      <FaWhatsapp />
    </a>
  )
}
