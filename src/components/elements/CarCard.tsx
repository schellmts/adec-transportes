'use client'

import React from 'react'
import Button from './Button'
import ButtonReserva from './ButtonReserva'

type CarProps = {
  name: string,
  tags: string,
  background: string
}

export default function CarCard({ name, tags, background }: CarProps) {
  return (
    <div className='rounded-xl shadow-lg overflow-hidden bg-gray-100'>

      <div className='relative flex items-center justify-center'>


        <img src={background} alt={name} className='w-full h-auto object-contain' />
      </div>

      <div className='p-6 text-left'>
        <h3 className='text-xl font-bold text-gray-800 mb-5'>
          {name}
        </h3>
        <div className='w-full'>
          <ButtonReserva text='Fazer Reserva' onClick={() => window.open('https://api.whatsapp.com/send/?phone=5542988748620&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+saber+mais+sobre+os+servi%C3%A7os&type=phone_number&app_absent=0')} />
        </div>
      </div>

    </div>
  )
}
