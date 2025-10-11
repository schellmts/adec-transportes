import { cars } from '@/utils/cars'
import React from 'react'
import CarCard from '../elements/CarCard'

export default function Cars() {
    const data = cars

    return (
        <section className="w-full text-dark" id="cars">
            {/* Título e descrição */}
            <div className="w-1/2 max-xl:w-full mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold pb-4 leading-tight">
                    Nossa Frota
                </h2>
                <p className="text-base sm:text-lg md:text-lg leading-relaxed text-gray-700">
                    Nossa frota é composta por veículos conhecidos por sua confiabilidade, conforto e eficiência.
                    Com uma frota uniforme, garantimos um padrão de qualidade e segurança para nossos clientes.
                </p>
            </div>

            {/* Grid de carros (mantida como antes) */}
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
        </section>
    )
}
