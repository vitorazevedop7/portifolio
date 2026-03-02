import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Projetos from '@/components/Projetos'
import Experiencias from '@/components/Experiencias'
import Contato from '@/components/Contato'

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Projetos />
      <Experiencias />
      <Contato />
    </main>
  )
}
