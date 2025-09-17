import { cars } from '@/utils/cars'
import React from 'react'
import CarCard from '../elements/CarCard';

export default function Cars() {

  const data = cars;

  return (
    <div className='w-full text-dark' id='cars'>
      <div className='w-1/2'>
        <h2 className='text-5xl font-semibold pb-5'>Nossa Frota</h2>
        <p className='pb-5'>
          Nossa frota é composta por veículos conhecidos por sua confiabilidade, conforto e eficiência. Com uma frota uniforme, garantimos um padrão de qualidade e segurança para nossos clientes.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-2/3 mx-auto gap-10 mt-10'>
        {data.map((item, index) => (
          <div key={index}>
            <CarCard name={item.name} background={item.background} tags={item.tags} />
          </div>
        ))}
      </div>
    </div>
  )
}
