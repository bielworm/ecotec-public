import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import { MenuHamburguer } from '@/components/Partials/MenuHamburguer'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import 'swiper/css/bundle'
import '../styles/index.scss'
import DialogPrivacityPolicy from '@/components/Dialogs/DialogPrivacityPolicy'
const inter = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: {
    default: 'BPN14',
    template:
      '%s | Boilerplate Next 15 with Prismic, TypeScript and TailwindCSS',
  },
  description: 'Boilerplate Next 15 with Prismic, TypeScript and TailwindCSS',
  keywords: ['Boilerplate', 'Next', 'Prismic', 'TypeScript', 'TailwindCSS'],
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Header />
        {children}
        <Footer />
        <MenuHamburguer />
        <Toaster
          toastOptions={{
            className: 'bg-zinc-500 text-white',
            style: {
              zIndex: 999999,
            },
          }}
        />
        <DialogPrivacityPolicy />
      </body>
    </html>
  )
}