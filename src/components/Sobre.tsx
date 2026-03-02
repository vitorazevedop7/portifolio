'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const bioPT = (
  <>
    <p style={{ color: '#7A7A72', fontWeight: 300, lineHeight: 1.8, marginBottom: '20px', fontSize: '1.05rem' }}>
      Olá! Sou <strong style={{ color: '#1A1A18', fontWeight: 500 }}>Vitor Azevedo</strong>, estudante de{' '}
      <strong style={{ color: '#1A1A18', fontWeight: 500 }}>Engenharia de Software na PUC Minas</strong> e desenvolvedor
      full-stack focado em construir aplicações web modernas e escaláveis.
    </p>
    <p style={{ color: '#7A7A72', fontWeight: 300, lineHeight: 1.8, marginBottom: '20px', fontSize: '1.05rem' }}>
      Tenho experiência prática desenvolvendo e entregando projetos reais para clientes — desde sistemas de agendamento
      para barbearias até catálogos de viagem. Gosto de resolver problemas com código limpo e interfaces que as pessoas
      realmente querem usar.
    </p>
    <p style={{ color: '#7A7A72', fontWeight: 300, lineHeight: 1.8, fontSize: '1.05rem' }}>
      Estou em busca da minha primeira oportunidade internacional para crescer como engenheiro, colaborar com times
      diversos e continuar aprendendo.
    </p>
  </>
)

const bioEN = (
  <>
    <p style={{ color: '#7A7A72', fontWeight: 300, lineHeight: 1.8, marginBottom: '20px', fontSize: '1.05rem' }}>
      Hi! I&apos;m <strong style={{ color: '#1A1A18', fontWeight: 500 }}>Vitor Azevedo</strong>, a{' '}
      <strong style={{ color: '#1A1A18', fontWeight: 500 }}>Software Engineering student at PUC Minas</strong> and a
      full-stack developer focused on building modern, scalable web applications.
    </p>
    <p style={{ color: '#7A7A72', fontWeight: 300, lineHeight: 1.8, marginBottom: '20px', fontSize: '1.05rem' }}>
      I have hands-on experience delivering real-world projects for clients — from barbershop booking systems to travel
      catalog platforms. I enjoy solving problems with clean code and interfaces people actually want to use.
    </p>
    <p style={{ color: '#7A7A72', fontWeight: 300, lineHeight: 1.8, fontSize: '1.05rem' }}>
      I&apos;m seeking my first international opportunity to grow as an engineer, collaborate with diverse teams, and keep
      learning.
    </p>
  </>
)

const skillsPT = [
  { label: 'Front-end', tags: ['React', 'Next.js', 'HTML/CSS', 'JavaScript', 'TypeScript'] },
  { label: 'Back-end', tags: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'] },
  { label: 'Ferramentas', tags: ['Git & GitHub', 'Figma', 'Vercel', 'Docker'] },
]

const skillsEN = [
  { label: 'Front-end', tags: ['React', 'Next.js', 'HTML/CSS', 'JavaScript', 'TypeScript'] },
  { label: 'Back-end', tags: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'] },
  { label: 'Tools', tags: ['Git & GitHub', 'Figma', 'Vercel', 'Docker'] },
]

export default function Sobre() {
  const { lang } = useLanguage()

  const skills = lang === 'pt' ? skillsPT : skillsEN

  return (
    <section id="sobre" style={{ borderTop: '1px solid #E4E2DE', padding: '96px max(24px, 5vw)', maxWidth: '1100px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
        {lang === 'pt' ? '01 — Sobre Mim' : '01 — About Me'}
      </p>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.15, color: '#1A1A18', marginBottom: '48px' }}>
        {lang === 'pt' ? 'Quem sou eu' : 'Who I am'}
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
        <div>
          {lang === 'pt' ? bioPT : bioEN}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {skills.map((cat) => (
            <div key={cat.label} style={{ background: '#FFFFFF', border: '1px solid #E4E2DE', borderRadius: '12px', padding: '20px 24px' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A7A72', marginBottom: '12px' }}>
                {cat.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: '0.8rem', padding: '4px 12px', borderRadius: '100px', background: '#F7F5F2', border: '1px solid #E4E2DE', color: '#1A1A18' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
