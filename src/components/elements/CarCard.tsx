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
        <div className='absolute top-4 left-4 bg-slate-800 text-white text-xs font-semibold px-3 py-1 rounded-full'>
          {tags}
        </div>

        <img src={background} alt={name} className='w-full h-auto object-contain' />
      </div>

      <div className='p-6 text-left'>
        <h3 className='text-xl font-bold text-gray-800 mb-5'>
          {name}
        </h3>
        <div className='w-full'>
          <ButtonReserva text='Fazer Reserva' onClick={() => console.log(`Reserva para ${name}`)} />
        </div>
      </div>

    </div>
  )
}
