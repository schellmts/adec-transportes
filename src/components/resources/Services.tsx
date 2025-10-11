'use client'

import { serviceCard } from '@/utils/ServiceCards'
import React, { useState } from 'react'
import FlatButton from '../elements/FlatButton'
import Modal from '../elements/Modal'
import Button from '../elements/Button'

type ServiceItem = {
  title: string;
  background: string;
  body: string;
};

export default function Services() {
  const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);

  const openModal = (item: ServiceItem) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const data: ServiceItem[] = serviceCard;

  return (
      <div className="w-full text-dark">
        {/* Título */}
        <div className="w-1/2 max-xl:w-full mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold pb-4 leading-tight">
            Nossos Serviços
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Com sede em Guarapuava e atendimento estendido para Curitiba e outras regiões,
            a ADEC oferece uma gama completa de serviços de transporte executivo,
            pensados para atender desde demandas corporativas até ocasiões especiais com elegância, segurança e eficiência.
          </p>
        </div>

        {/* Grid mantida exatamente como antes */}
        <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5">
          {data.map((item, index) => (
              <div
                  key={index}
                  onClick={() => openModal(item)}
                  style={{ backgroundImage: `url(${item.background})` }}
                  className="cursor-pointer w-full h-64 sm:h-72 md:h-80 bg-cover bg-center rounded-xl
                       shadow-md text-[#f2f2f2] text-lg sm:text-xl font-semibold
                       flex flex-col items-start justify-end p-4 sm:p-5
                       hover:scale-[1.03] transition-transform duration-500"
              >
                <div>
                  {item.title}
                </div>

                <div className="mt-3">
                  <FlatButton onClick={() => openModal(item)} text="Saiba Mais" paddingX={3} paddingY={2} />
                </div>
              </div>
          ))}

          {/* Modal */}
          {selectedItem && (
              <Modal
                  isOpen={!!selectedItem}
                  onClose={closeModal}
                  title={selectedItem.title}
                  className="max-w-[90vw] sm:max-w-lg md:max-w-2xl w-full"
              >
                <div
                    className="space-y-4 text-dark [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2"
                    dangerouslySetInnerHTML={{ __html: selectedItem.body }}
                />
                <div className="mt-6 flex justify-end">
                  <Button text="Entendido!" onClick={closeModal} />
                </div>
              </Modal>
          )}
        </div>
      </div>
  )
}
