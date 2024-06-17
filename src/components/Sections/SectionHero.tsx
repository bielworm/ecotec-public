import React from 'react'
import { Container } from '../Partials/Container'
import { Button } from '../Buttons/Button'
import FadeAnimation from '../Animations/FadeAnimation'
import SlideAnimation from '../Animations/SlideAnimation'

export default function SectionHero() {
  return (
    <div id="home" className="bg-[url('/img/bg-blue.png')]">
      <Container>
        <div className="grid items-center justify-center pb-12 md:grid-cols-2 md:pb-0">
          <div className="grid h-[56vh] items-end md:h-[64vh]">
            <FadeAnimation>
              <img
                src="/img/img-hero.png"
                className="mx-auto h-[48vh] object-contain md:h-[52vh]"
              />
            </FadeAnimation>
          </div>
          <div className="mt-4 md:mt-0">
            <SlideAnimation direction="left">
              <h1 className="poppins-semibold text-center text-4xl text-white md:text-start">
                <span className="poppins-semibold text-5xl text-brand-yellow-600">
                  Reduza suas contas
                </span>{' '}
                de energia de uma vez por todas!
              </h1>
              <p className="mb-6 mt-4 text-center text-2xl text-white md:text-start">
                Energia solar de alta performance, economia extrema e eficiência
                sem limites!
              </p>
              <div className="flex justify-center">
                <a href="#contato">
                  <Button variant="primaryYellow">ECONOMIZE AGORA</Button>
                </a>
              </div>
            </SlideAnimation>
          </div>
        </div>
      </Container>
    </div>
  )
}
