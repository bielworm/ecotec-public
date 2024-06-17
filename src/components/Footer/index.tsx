'use client'

import Link from 'next/link'
import { Container } from '../Partials/Container'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 bg-brand-blue-800 py-16">
        <Container>
          <div className="grid md:grid-cols-2">
            <div>
              <Link href="/">
                <img
                  src="/img/logo.png"
                  alt=""
                  className="mx-auto cursor-pointer py-3 transition-all"
                  style={{ height: '3.5rem' }}
                />
              </Link>
              <p className="text-center text-white">
                Junte-se a nós nessa jornada para um amanhã mais brilhante!
              </p>
            </div>
            <div className="mt-4">
              <div>
                <div>
                  <a href="#contato">
                    <div className="poppins-bold mx-auto mb-2 w-[240px] rounded-md bg-brand-yellow-600 p-1 text-center text-brand-blue-800 transition-all duration-200 hover:bg-opacity-80">
                      Realizar Simulação
                    </div>
                  </a>
                </div>
                <div className="text-center text-white">
                  <p>© Copyright 2024 Ecotec.</p>
                  <p>All Rights Reserved. By ClickDigital.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
