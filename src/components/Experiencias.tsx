'use client'

import { experiencesPT, experiencesEN } from '@/data/experiences'
import { useLanguage } from '@/contexts/LanguageContext'

const content = {
  pt: {
    header: '03 — Experiências',
    title: 'Trajetória',
  },
  en: {
    header: '03 — Experience',
    title: 'Journey',
  },
}

export default function Experiencias() {
  const { lang } = useLanguage()
  const t = content[lang]
  const experiences = lang === 'pt' ? experiencesPT : experiencesEN

  return (
    <section id="experiencias" style={{ borderTop: '1px solid #E4E2DE', padding: '96px max(24px, 5vw)', maxWidth: '1100px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
        {t.header}
      </p>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.15, color: '#1A1A18', marginBottom: '48px' }}>
        {t.title}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {experiences.map((exp) => (
          <div
            key={exp.id}
            style={{
              background: '#FFFFFF', border: '1px solid #E4E2DE', borderRadius: '12px',
              padding: '24px 28px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px',
            }}
          >
            <div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', letterSpacing: '-0.02em', marginBottom: '4px', color: '#1A1A18' }}>
                {exp.company}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#2D6A4F', fontWeight: 500, marginBottom: '10px' }}>
                {exp.role}
              </p>
              <p style={{ fontSize: '0.88rem', color: '#7A7A72', lineHeight: 1.7 }}>
                {exp.description}
              </p>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#7A7A72', letterSpacing: '0.04em', whiteSpace: 'nowrap', marginTop: '4px' }}>
              {exp.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
