import { cars } from '@/utils/cars'
import React from 'react'
import CarCard from '../elements/CarCard'

export default function Cars() {
  const data = cars

  return (
      <div className="w-full text-dark px-6 py-16" id="cars">
        {/* Título e descrição */}
        <div className="w-1/2 max-xl:w-full">
          <h2 className="text-5xl font-semibold pb-5">Nossa Frota</h2>
          <p className="pb-5">
            Nossa frota é composta por veículos conhecidos por sua confiabilidade, conforto e eficiência. Com uma frota uniforme, garantimos um padrão de qualidade e segurança para nossos clientes.
          </p>
        </div>

        {/* Grid de carros */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 w-full max-w-6xl mx-auto">
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
