import { serviceCard } from '@/utils/ServiceCards'
import React from 'react'
import Button from '../elements/Button'

export default function Services() {

  const data = serviceCard
  console.log(serviceCard)
  return (
    <div className='w-full text-dark'>
      <div className='w-1/2'>
        <h2 className='text-5xl font-semibold pb-5'>Nossos Serviços</h2>
        <p className='pb-5'>Com sede em Guarapuava e atendimento estendido para Curitiba e outras regiões,
          a ADEC oferece uma gama completa de serviços de transporte executivo,
          pensados para atender desde demandas corporativas até ocasiões especiais com elegância, segurança e eficiência.</p>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {data.map((item, index) => (
          <div style={{ backgroundImage: `url(${item.background})`, }} className='w-full text-[#f2f2f2] text-xl flex flex-col items-start justify-end p-5 font-semibold h-64 rounded-lg bg-cover' key={index}>
            {item.title}
            <div>
              <Button text='Saiba Mais' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
