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
    default: 'Ecotec',
    template:
      'Energia solar de alta performance, economia extrema e eficiência sem limites!',
  },
  description:
    'Energia solar de alta performance, economia extrema e eficiência sem limites!',
  keywords: ['Ecotec', 'Energia', 'Solar', 'Energia Solar'],
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    title: 'Ecotec',
    description:
      'Energia solar de alta performance, economia extrema e eficiência sem limites!',
    images: [
      {
        url: 'https://ecotec-zeta.vercel.app/seo.png',
        width: 1200,
        height: 630,
        alt: 'Ecotec',
        type: 'image/png',
      },
    ],
    siteName: 'https://ecotec-zeta.vercel.app',
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
