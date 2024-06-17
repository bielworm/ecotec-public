'use client'

import NavLinks from './NavLinks'
import Link from 'next/link'
import { Container } from '../Partials/Container'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { useEffect } from 'react'
import Icon from '../Adapters/Icon'

export function Header() {
  const { setShowMenuHamburguer } = useMenuHamburguerStore()

  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <header
      className={`top-0 z-50 w-full bg-brand-blue-500 shadow-xl backdrop-blur transition-all`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="hidden items-center gap-8 md:flex">
            <NavLinks />
          </div>
          <Link href="/">
            <img
              src="/img/logo.png"
              alt=""
              className="cursor-pointer py-3 transition-all"
              style={{ height: '3.5rem' }}
            />
          </Link>
          <div
            className="md:hidden"
            onClick={() => setShowMenuHamburguer(true)}
          >
            <Icon icon="mdi:menu" className="text-3xl text-white" />
          </div>
        </div>
      </Container>
    </header>
  )
}
