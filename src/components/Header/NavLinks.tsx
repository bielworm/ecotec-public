'use client'
import Link from 'next/link'
import { DropdownHover } from './DropdownHover'

export const navLinks = [
  {
    route: '/',
    name: 'HOME',
  },
  {
    route: '#sobre',
    name: 'QUEM SOMOS',
  },
  {
    route: '#contato',
    name: 'SIMULAÇÃO',
  },
  {
    route: '#',
    name: 'FALE CONOSCO',
  },
]

type LinkType = {
  route: string
  name: string
  dinamic_submenu_document_type?: any
  submenu?: any
}

export default function NavLinks() {
  return (
    <>
      {navLinks?.map((link: LinkType) => {
        if (link.dinamic_submenu_document_type) {
          return (
            <DropdownHover
              key={link.name}
              mainRoute={link.route}
              title={link.name}
              links={link.submenu}
              dinamicSubmenuDocumentType={link.dinamic_submenu_document_type}
            />
          )
        }
        if (link.submenu) {
          return (
            <DropdownHover
              key={link.name}
              mainRoute={link.route}
              title={link.name}
              links={link.submenu}
            />
          )
        }
        return (
          <Link key={link.name} href={link.route}>
            <span
              className={`poppins-medium cursor-pointer text-sm text-white hover:opacity-70`}
            >
              {link.name}
            </span>
          </Link>
        )
      })}
    </>
  )
}
