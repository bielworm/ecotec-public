import React from 'react'
import { Container } from '../Partials/Container'

export default function SectionProjeto() {
  return (
    <Container>
      <div className="grid items-center py-12 md:grid-cols-2">
        <div>
          <img
            src="/img/img-projeto.png"
            className="mx-auto h-[64vh] object-contain md:m-0"
          />
        </div>
        <div>
          <h2 className="poppins-bold mt-3 text-center text-4xl text-brand-blue-800 md:mt-0 md:text-start">
            Transforme seu Projeto em realidade
          </h2>
          <p className="poppins-medium mt-8 text-center text-lg text-brand-blue-800 md:text-start">
            Não importa o tamanho do seu projeto, estamos aqui para oferecer a
            solução perfeita em energia solar. Vamos começar?
          </p>
        </div>
      </div>
    </Container>
  )
}
