import React from 'react'
import Button from '../elements/Button'

export default function About() {
    return (
        <div
            className="w-full flex justify-between items-stretch gap-20 px-6 py-16 max-xl:flex-col max-xl:gap-10"
            id="about"
        >
            {/* Texto */}
            <div className="text-dark w-1/2 max-xl:w-full max-md:w-full">
                <h2 className="text-5xl font-semibold pb-5 max-md:text-4xl max-sm:text-3xl">
                    Quem Somos
                </h2>
                <p className="pb-5 max-md:text-base">ADEC Transporte Executivo.</p>
                <p className="pb-5 max-md:text-sm">
                    Fundada em Guarapuava, com atendimento estendido para Curitiba e outras regiões, é uma empresa especializada no segmento de transporte executivo, oferecendo soluções personalizadas, seguras e de alta qualidade para seus clientes. <br />
                    Com 11 anos de experiência no mercado, somos referência em conforto, pontualidade e excelência no atendimento, proporcionando uma experiência única e exclusiva para quem busca mais do que um simples transporte. <br />
                    Entendemos que cada trajeto é importante, seja um compromisso pessoal, uma reunião de negócios, uma viagem ou uma chegada no aeroporto. Por isso nossa equipe é formada por profissionais discretos e altamente qualificados, e nossa frota é composta por veículos modernos, embarcados com tecnologia de ponta, garantindo que cada viagem com a ADEC seja sinônimo de tranquilidade e excelência.
                </p>
                <Button text="Faça Sua Reserva" />
            </div>

            {/* Imagem / Background */}
            <div className="w-1/2 max-xl:w-full max-xl:h-[400px] bg-about bg-no-repeat bg-cover bg-center rounded-xl shadow-lg" />
        </div>
    )
}
