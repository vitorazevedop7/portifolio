'use client'

import { projectsPT, projectsEN } from '@/data/projects'
import { useLanguage } from '@/contexts/LanguageContext'

const content = {
  pt: {
    header: '02 — Projetos',
    title: 'O que construí',
    githubLink: 'Ver no GitHub →',
  },
  en: {
    header: '02 — Projects',
    title: 'What I built',
    githubLink: 'View on GitHub →',
  },
}

export default function Projetos() {
  const { lang } = useLanguage()
  const t = content[lang]
  const projects = lang === 'pt' ? projectsPT : projectsEN

  return (
    <section id="projetos" style={{ borderTop: '1px solid #E4E2DE', padding: '96px max(24px, 5vw)', maxWidth: '1100px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
        {t.header}
      </p>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.15, color: '#1A1A18', marginBottom: '48px' }}>
        {t.title}
      </h2>

      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '1px', background: '#E4E2DE' }} />

        {projects.map((project) => (
          <div key={project.id} style={{ position: 'relative', paddingLeft: '60px', marginBottom: '56px' }}>
            {/* Dot */}
            <div style={{ position: 'absolute', left: '12px', top: '6px', width: '17px', height: '17px', borderRadius: '50%', background: '#FFFFFF', border: '2px solid #2D6A4F' }} />

            <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A7A72', marginBottom: '12px' }}>
              {project.year}
            </p>

            <div style={{ background: '#FFFFFF', border: '1px solid #E4E2DE', borderRadius: '16px', overflow: 'hidden' }}>
              {/* Image area */}
              <div style={{ width: '100%', height: '200px', background: project.bgGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>
                {project.emoji}
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', marginBottom: '8px', letterSpacing: '-0.02em', color: '#1A1A18' }}>
                  {project.name}
                </h3>
                <p style={{ color: '#7A7A72', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '16px' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.techs.map((tech) => (
                    <span key={tech} style={{ fontSize: '0.72rem', padding: '3px 10px', borderRadius: '100px', background: '#D8F3DC', color: '#2D6A4F', fontWeight: 500 }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', color: '#1A1A18', textDecoration: 'none', fontWeight: 500, borderBottom: '1px solid #E4E2DE', paddingBottom: '2px' }}>
                  {t.githubLink}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
