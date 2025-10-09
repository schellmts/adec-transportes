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

  const openModal = (item: ServiceItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const data: ServiceItem[] = serviceCard;

  return (
    <div className='w-full text-dark'>
      <div className='w-1/2 max-xl:w-full'>
        <h2 className='text-5xl font-semibold pb-5'>Nossos Serviços</h2>
        <p className='pb-5'>
          Com sede em Guarapuava e atendimento estendido para Curitiba e outras regiões,
          a ADEC oferece uma gama completa de serviços de transporte executivo,
          pensados para atender desde demandas corporativas até ocasiões especiais com elegância, segurança e eficiência.
        </p>
      </div>
      <div className='grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5'>
        {data.map((item, index) => (
          <div
            style={{ backgroundImage: `url(${item.background})` }}
            className='w-full hover:scale-105 duration-500 text-[#f2f2f2] text-xl flex flex-col items-start justify-end p-5 font-semibold h-64 rounded-lg bg-cover'
            key={index}
          >
            {item.title}
            <div>
              <FlatButton onClick={() => openModal(item)} text='Saiba Mais' paddingX={3} paddingY={2} />
            </div>
          </div>
        ))}

        {selectedItem && (
          <Modal
            isOpen={!!selectedItem}
            onClose={closeModal}
            title={selectedItem.title}
          >
            <div
              className="space-y-4 [&_ul]:text-dark text-dark [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_h4]:text-dark [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2"
              dangerouslySetInnerHTML={{ __html: selectedItem.body }}
            />

            <div className="mt-6 flex justify-end">
              <Button text='Entendido!' onClick={closeModal} />
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}
