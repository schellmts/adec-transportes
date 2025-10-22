'use client'

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { IMaskInput } from 'react-imask';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import {environment} from "../../../environments/environment";

interface ContactFormData {
  nome: string;
  telefone: string;
  email: string;
  service: string;
  message: string;
}

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  telefone: yup.string().required('Telefone é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  service: yup.string().required('Selecione um tipo de serviço'),
  message: yup.string().required('Mensagem é obrigatória'),
});

export default function Contact() {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: ContactFormData) => {
    // Mostra o alerta de carregamento
    Swal.fire({
      title: 'Enviando mensagem...',
      text: 'Por favor, aguarde.',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    emailjs
        .send(
            environment.serviceId,
            environment.templateId,
            {
              nome: data.nome,
              email: data.email,
              telefone: data.telefone,
              service: data.service,
              message: data.message,
            },
            environment.publicKey
        )
        .then((response) => {
          console.log('Email enviado!', response.status, response.text);

          // Fecha o carregamento e mostra sucesso
          Swal.fire({
            icon: 'success',
            title: 'Mensagem enviada!',
            text: 'Recebemos suas informações. Em breve entraremos em contato.',
            confirmButtonColor: '#1b3c48',
          });

          reset();
        })
        .catch((err) => {
          console.error('Erro ao enviar email:', err);

          // Fecha o carregamento e mostra erro
          Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Não foi possível enviar sua mensagem, tente novamente mais tarde.',
            confirmButtonColor: '#1b3c48',
          });
        });
  };



  return (
      <section className="bg-dark text-[#f2f2f2] py-16 px-6 sm:px-10 md:px-20 lg:px-32" id="contact">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Informações de contato */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-md:text-4xl">
              Fale com Nossos <br /> Especialistas
            </h2>
            <p className="text-base sm:text-lg md:text-lg leading-relaxed">
              Nossa equipe está pronta para criar a solução de transporte executivo
              perfeita para suas necessidades específicas.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-light mb-2">Telefones</h3>
                <div className="flex flex-col gap-2">
                  <a target={'_blank'} href={'https://api.whatsapp.com/send/?phone=5542988748620&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+saber+mais+sobre+os+servi%C3%A7os&type=phone_number&app_absent=0'} className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity">
                    <FaWhatsapp /> +55 42 98874-8620 - Alexandro
                  </a>
                  <a target={'_blank'} href={'https://api.whatsapp.com/send/?phone=5542999586213&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+saber+mais+sobre+os+servi%C3%A7os&type=phone_number&app_absent=0'} className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity">
                    <FaWhatsapp /> +55 42 99958-6213 - ADEC (Exclusivo mensagens)
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 opacity-75">EMAIL</h3>
                <a href="mailto:alexandrocoblinski@hotmail.com" className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity">
                  <FaEnvelope /> alexandrocoblinski@hotmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2 opacity-75">ENDEREÇO</h3>
                <p className="flex items-center gap-3 text-lg">
                  <FaMapMarkerAlt /> Avenida Deputado Cesar Silvestre, 2679 <br /> Morro Alto, Guarapuava, PR
                </p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#1c4659] p-6 sm:p-8 md:p-12 rounded-xl shadow-xl text-[#f2f2f2]">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Pronto para Viajar com Excelência?</h3>
              <p className="mb-6 opacity-90 text-base sm:text-lg">Entre em contato e solicite uma cotação</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                <input
                    {...register('nome')}
                    type="text"
                    placeholder="Nome completo"
                    className={`w-full bg-[#3e5965] border ${errors.nome ? 'border-red-500' : 'border-transparent'} rounded-md py-3 px-4 text-[#f2f2f2] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1b3c48] focus:ring-[#e0d8c3]`}
                />
                {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}

                <div className="flex flex-col sm:flex-row gap-5">
                  <Controller
                      name="telefone"
                      control={control}
                      render={({ field }) => (
                          <IMaskInput
                              {...field}
                              mask="(00) 00000-0000"
                              placeholder="Telefone"
                              className={`w-full sm:w-1/2 bg-[#3e5965] border ${errors.telefone ? 'border-red-500' : 'border-transparent'} rounded-md py-3 px-4 text-[#f2f2f2] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1b3c48] focus:ring-[#e0d8c3]`}
                          />
                      )}
                  />
                  {errors.telefone && <p className="text-red-500 text-sm sm:ml-2">{errors.telefone.message}</p>}

                  <input
                      {...register('email')}
                      type="email"
                      placeholder="Email"
                      className={`w-full sm:w-1/2 bg-[#3e5965] border ${errors.email ? 'border-red-500' : 'border-transparent'} rounded-md py-3 px-4 text-[#f2f2f2] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1b3c48] focus:ring-[#e0d8c3]`}
                  />
                  {errors.email && <p className="text-red-500 text-sm sm:ml-2">{errors.email.message}</p>}
                </div>

                <select
                    {...register('service')}
                    defaultValue=""
                    className={`w-full bg-[#3e5965] border ${errors.service ? 'border-red-500' : 'border-transparent'} rounded-md py-3 px-4 text-[#f2f2f2] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1b3c48] focus:ring-[#e0d8c3]`}
                >
                  <option value="" disabled>Tipo de serviço</option>
                  <option value="Transporte Executivo">Transporte Executivo</option>
                  <option value="Transporte Corporativo">Transporte Corporativo</option>
                  <option value="Viagens Intermunicipais e Interestaduais">Viagens Intermunicipais e Interestaduais</option>
                  <option value="Receptivo em Aeroportos">Receptivo em Aeroportos</option>
                  <option value="Motorista Particular">Motorista Particular</option>
                  <option value="Congresso e Eventos">Congresso e Eventos</option>
                  <option value="Casamentos">Casamentos</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}

                <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Conte-nos sobre suas necessidades de transporte executivo..."
                    className={`w-full bg-[#3e5965] border ${errors.message ? 'border-red-500' : 'border-transparent'} rounded-md py-3 px-4 text-[#f2f2f2] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1b3c48] focus:ring-[#e0d8c3]`}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

                <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#e0d8c3] text-[#1b3c48] font-bold py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Solicitar Cotação Personalizada
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
  );
}
