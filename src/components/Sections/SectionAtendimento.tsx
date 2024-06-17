import React from 'react'
import { Button } from '../Buttons/Button'
import { Container } from '../Partials/Container'

export default function SectionAtendimento() {
  return (
    <div className="bg-[url('/img/bg-yellow.png')]">
      <Container>
        <div className="grid items-center justify-center pb-12 md:grid-cols-2 md:pb-0">
          <div className="grid h-[40vh] items-end md:h-[64vh]">
            <img
              src="/img/img-atendimento.png"
              className="mx-auto h-[32vh] object-contain md:h-[56vh]"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <h1 className="poppins-bold text-center text-4xl text-brand-blue-800 md:text-start">
              Atendimento Personalizado e de Qualidade
            </h1>
            <p className="mb-6 mt-4 text-center text-lg text-white md:text-start">
              Consultores especializados e técnicos de excelência prontos para
              entregar a solução ideal de acordo com as suas preferências,
              focando em diminuir seus custos e facilitar a sua vida.
            </p>
            <div className="flex justify-center">
              <a href="#contato">
                <Button variant="primaryBlue">SOLICITE UM ORÇAMENTO</Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
