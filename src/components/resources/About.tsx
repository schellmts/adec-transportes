import React from 'react'
import Button from '../elements/Button'

export default function About() {
    return (
        <section
            id="about"
            className="w-full flex justify-between items-stretch gap-20 py-20
                 max-xl:flex-col max-xl:gap-12 bg-white text-dark"
        >
            {/* Texto */}
            <div className="flex flex-col justify-center w-full xl:w-1/2">
                <h2 className="text-4xl sm:text-5xl font-semibold pb-5 leading-tight">
                    Quem Somos
                </h2>

                <p className="pb-4 text-lg sm:text-xl font-medium">
                    ADEC Transporte Executivo.
                </p>

                <p className="pb-6 text-base sm:text-lg leading-relaxed text-gray-700">
                    Fundada em Guarapuava, com atendimento estendido para Curitiba e outras regiões, é uma
                    empresa especializada no segmento de transporte executivo, oferecendo soluções
                    personalizadas, seguras e de alta qualidade para seus clientes.
                    <br />
                    <br />
                    Com 11 anos de experiência no mercado, somos referência em conforto, pontualidade e
                    excelência no atendimento, proporcionando uma experiência única e exclusiva para quem
                    busca mais do que um simples transporte.
                    <br />
                    <br />
                    Entendemos que cada trajeto é importante — seja um compromisso pessoal, uma reunião de
                    negócios, uma viagem ou uma chegada no aeroporto. Nossa equipe é formada por
                    profissionais discretos e altamente qualificados, e nossa frota é composta por veículos
                    modernos e tecnológicos, garantindo que cada viagem com a ADEC seja sinônimo de
                    tranquilidade e excelência.
                </p>

                <div className="mt-6">
                    <Button text="Faça Sua Reserva" />
                </div>
            </div>

            {/* Imagem */}
            <div
                className="w-full xl:w-1/2 h-[300px] sm:h-[400px] md:h-[500px]
                   bg-about bg-no-repeat bg-cover bg-center rounded-xl shadow-xl"
            />
        </section>
    )
}
