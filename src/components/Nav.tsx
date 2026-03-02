'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const navItems = {
  pt: ['sobre', 'projetos', 'experiencias', 'contato'],
  en: ['about', 'projects', 'experience', 'contact'],
}

const navLabels = {
  pt: { sobre: 'Sobre', projetos: 'Projetos', experiencias: 'Experiências', contato: 'Contato' },
  en: { about: 'About', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  const sections = {
    pt: ['sobre', 'projetos', 'experiencias', 'contato'],
    en: ['sobre', 'projetos', 'experiencias', 'contato'],
  }

  const labels = {
    pt: ['Sobre', 'Projetos', 'Experiências', 'Contato'],
    en: ['About', 'Projects', 'Experience', 'Contact'],
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(247, 245, 242, 0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #E4E2DE',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 max(24px, 5vw)', height: '64px',
    }}>
      <a href="#hero" style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', color: '#1A1A18', textDecoration: 'none', letterSpacing: '-0.02em' }}>
        VA.
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop">
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
          {sections[lang].map((id, idx) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  fontSize: '0.875rem', color: '#7A7A72', textDecoration: 'none',
                  letterSpacing: '0.02em', transition: 'color 0.2s',
                  ...(id === 'contato' ? {
                    border: '1px solid #2D6A4F', padding: '6px 16px',
                    borderRadius: '100px', color: '#2D6A4F', fontWeight: 500,
                  } : {}),
                }}
              >
                {labels[lang][idx]}
              </a>
            </li>
          ))}
        </ul>

        {/* Language toggle */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {(['pt', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                fontSize: '0.7rem', letterSpacing: '0.06em', padding: '4px 10px',
                borderRadius: '100px', border: '1px solid',
                borderColor: lang === l ? '#1A1A18' : '#E4E2DE',
                background: lang === l ? '#1A1A18' : 'none',
                color: lang === l ? 'white' : '#7A7A72',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
        className="nav-hamburger"
        aria-label="Menu"
      >
        <span style={{ display: 'block', width: '22px', height: '2px', background: '#1A1A18', borderRadius: '2px' }} />
        <span style={{ display: 'block', width: '22px', height: '2px', background: '#1A1A18', borderRadius: '2px' }} />
        <span style={{ display: 'block', width: '22px', height: '2px', background: '#1A1A18', borderRadius: '2px' }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <ul style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          background: '#F7F5F2', borderBottom: '1px solid #E4E2DE',
          display: 'flex', flexDirection: 'column', gap: '20px',
          padding: '24px max(24px, 5vw)', listStyle: 'none', margin: 0,
        }}>
          {sections[lang].map((id, idx) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} style={{ fontSize: '1rem', color: '#1A1A18', textDecoration: 'none' }}>
                {labels[lang][idx]}
              </a>
            </li>
          ))}
          {/* Language toggle mobile */}
          <li style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            {(['pt', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  fontSize: '0.75rem', letterSpacing: '0.06em', padding: '6px 14px',
                  borderRadius: '100px', border: '1px solid',
                  borderColor: lang === l ? '#1A1A18' : '#E4E2DE',
                  background: lang === l ? '#1A1A18' : 'none',
                  color: lang === l ? 'white' : '#7A7A72',
                  cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </li>
        </ul>
      )}
    </nav>
  )
}
