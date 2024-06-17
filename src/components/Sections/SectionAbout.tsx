import React from 'react'
import { Container } from '../Partials/Container'
import CardApproach from '../Partials/CardApproach'
import { Button } from '../Buttons/Button'

export default function SectionAbout() {
  const approachs = [
    {
      title: 'Análise',
      icon: '/img/icons/home.png',
      description:
        'Utilizamos tecnologia avançada, incluindo voos de drone, para avaliar as melhores opções para seu telhado.',
    },
    {
      title: 'Projeto Personalizado',
      icon: '/img/icons/docs_add_on.png',
      description:
        'Desenvolvemos uma solução que maximiza a eficiência e os benefícios econômicos.',
    },
    {
      title: 'Instalação Profissional',
      icon: '/img/icons/manufacturing.png',
      description:
        'Nossa equipe cuida de cada detalhe, assegurando uma integração perfeita com seu sistema elétrico.',
    },
    {
      title: 'Suporte Pós-Venda',
      icon: '/img/icons/add_call.png',
      description:
        'Continuamos ao seu lado, oferecendo o melhor suporte pós-venda do Norte, para garantir sua total satisfação.',
    },
  ]

  const services = [
    {
      title: 'Limpeza de placas',
      icon: '/img/icons/energy.png',
    },
    {
      title: 'Expansao do sistemas',
      icon: '/img/icons/light.png',
    },
    {
      title: 'Locação de usinas',
      icon: '/img/icons/check.png',
    },
  ]

  const feedbacks = [
    {
      title: 'Nome do Cliente',
      local: 'Belém/PA',
      power: 'Potência Instalada: 7.2Kwp',
      panels: '16 Painéis',
      economy: 'Economia Anual: 11.523,00',
    },
    {
      title: 'Nome do Cliente',
      local: 'Belém/PA',
      power: 'Potência Instalada: 7.2Kwp',
      panels: '16 Painéis',
      economy: 'Economia Anual: 11.523,00',
    },
    {
      title: 'Nome do Cliente',
      local: 'Belém/PA',
      power: 'Potência Instalada: 7.2Kwp',
      panels: '16 Painéis',
      economy: 'Economia Anual: 11.523,00',
    },
  ]

  return (
    <Container>
      <div id="sobre" className="grid items-center py-12 md:grid-cols-2">
        <div>
          <h2 className="poppins-bold text-center text-4xl text-brand-blue-800 md:text-start">
            Projetos Residenciais e Comerciais
          </h2>
          <p className="poppins-medium mb-6 mt-4 text-center text-lg text-brand-blue-800 md:text-start">
            Reduza custos, aumente a sustentabilidade e desfrute de soluções
            personalizadas com a excelência que só a Ecotec oferece. De pequenas
            residências a grandes propriedades, temos soluções personalizadas
            para atender exatamente o que você precisa.
          </p>
        </div>
        <div className="">
          <img
            src="/img/img-about.png"
            className="mx-auto h-[56vh] object-contain md:m-0"
          />
        </div>
      </div>

      <div>
        <h2 className="poppins-semibold text-center text-3xl text-brand-blue-800">
          Nossa abordagem
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {approachs.map((approach) => (
            <CardApproach approach={approach} key={approach.title} />
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="poppins-semibold text-center text-3xl text-brand-blue-800">
          Serviços
        </h2>
        <div className="mx-auto mt-4 w-80">
          {services.map((service) => (
            <div
              className="mt-2 flex flex-row justify-start gap-4"
              key={service.title}
            >
              <img src={service.icon} className="h-8 object-contain" />
              <p className="poppins-medium text-2xl text-brand-blue-800">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="poppins-bold text-center text-3xl text-brand-blue-800">
          Conheça nosso trabalho
        </h2>
        <div className="mt-8 grid gap-16 md:grid-cols-3">
          {feedbacks.map((feedback) => (
            <div
              className="flex h-[400px] w-full items-center justify-center rounded-2xl bg-[url('/img/bg-card-work.png')] bg-cover"
              key={feedback.title}
            >
              <div>
                <p className="poppins-medium-italic text-center text-white">
                  {feedback.title}
                </p>
                <p className="poppins-medium-italic mb-4 text-center text-white">
                  {feedback.local}
                </p>

                <p className="mt-1 text-center text-white">✦{feedback.power}</p>
                <p className="mt-1 text-center text-white">
                  ✦{feedback.panels}
                </p>
                <p className="mt-1 text-center text-white">
                  ✦{feedback.economy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a href="https://wa.me/5591920016588" target="_blank" rel="noreferrer">
          <Button variant="primaryBlue">FALE CONOSCO</Button>
        </a>
      </div>
    </Container>
  )
}
