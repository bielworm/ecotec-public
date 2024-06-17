import { Metadata } from 'next'
import SectionHero from '@/components/Sections/SectionHero'
import SectionAtendimento from '@/components/Sections/SectionAtendimento'
import SectionAbout from '@/components/Sections/SectionAbout'
import SectionAjuda from '@/components/Sections/SectionAjuda'
import SectionProjeto from '@/components/Sections/SectionProjeto'
import SectionFormulario from '@/components/Sections/SectionFormulario'

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      title: 'Ecotec',
      description:
        'Energia solar de alta performance, economia extrema e eficiência sem limites!',
      images: [
        {
          url: 'https://ecotec-zeta.vercel.app/seo.png',
        },
      ],
    },
  }
}

export default async function Home() {
  return (
    <main>
      <SectionHero />
      <SectionAtendimento />
      <SectionAbout />
      <SectionAjuda />
      <SectionProjeto />
      <SectionFormulario />
    </main>
  )
}
