import React from 'react'

export default function SectionAjuda() {
  return (
    <div className="relative my-24 flex h-[240px] flex-row items-center bg-[url('/img/bg-yellow.png')] md:h-[280px]">
      <img src="/img/house.png" className="h-[300px] md:h-[480px]" />
      <div className="absolute right-[50%] w-[88vw] translate-x-[50%] rounded-md bg-[url('/img/bg-blue-small.png')] bg-cover p-8 md:w-auto">
        <p className="poppins-medium text-white">
          Quer saber mais sobre como podemos ajudar você a transformar a energia
          solar em economia real para sua casa ou empresa?{' '}
          <span className="poppins-bold">
            Clique abaixo para falar diretamente com um de nossos consultores.
            Estamos ansiosos para iniciar essa jornada com você!
          </span>
          <div className="absolute right-[50%] w-80 -translate-y-4 translate-x-[50%] md:-translate-y-2">
            <img
              src="/img/button_whatsapp.png"
              className="cursor-pointer object-contain transition-transform duration-300 ease-in-out hover:scale-105 md:h-[88px]"
            />
          </div>
        </p>
      </div>
    </div>
  )
}
