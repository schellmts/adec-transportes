import { cars } from '@/utils/cars'
import React from 'react'
import CarCard from '../elements/CarCard';

export default function Cars() {

  const data = cars;

  return (
    <div className='w-full text-dark' id='cars'>
      <div className='w-1/2 max-xl:w-full'>
        <h2 className='text-5xl font-semibold pb-5'>Nossa Frota</h2>
        <p className='pb-5'>
          Nossa frota é composta por veículos conhecidos por sua confiabilidade, conforto e eficiência. Com uma frota uniforme, garantimos um padrão de qualidade e segurança para nossos clientes.
        </p>
      </div>
        <div className='grid grid-cols-1 sm:grid-cols-2  gap-8 mt-12 w-full max-w-6xl'>
            {data.map((item, index) => (
                <CarCard
                    key={index}
                    name={item.name}
                    background={item.background}
                    tags={item.tags}
                />
            ))}
        </div>
    </div>
  )
}
