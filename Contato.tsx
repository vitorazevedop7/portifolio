'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const socialLinks = [
  { icon: '✉️', label: 'vitorazevedo.p7@gmail.com', href: 'mailto:vitorazevedo.p7@gmail.com' },
  { icon: '💼', label: 'linkedin.com/in/vitor-azevedo', href: 'https://www.linkedin.com/in/vitor-azevedo-293609343/' },
  { icon: '🐙', label: 'github.com/vitorazevedop7', href: 'https://github.com/vitorazevedop7' },
  { icon: '💬', label: 'WhatsApp', href: 'https://wa.me/55' },
]

export default function Contato() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const [status, setStatus] = useState<Status>('idle')

  function validate() {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Nome é obrigatório'
    if (!form.email.trim()) e.email = 'E-mail é obrigatório'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail inválido'
    if (!form.message.trim()) e.message = 'Mensagem é obrigatória'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = (field: keyof typeof form): React.CSSProperties => ({
    fontFamily: 'inherit', fontSize: '0.95rem', padding: '12px 16px',
    border: `1px solid ${errors[field] ? '#e53e3e' : '#E4E2DE'}`,
    borderRadius: '10px', background: '#FFFFFF', color: '#1A1A18',
    width: '100%', outline: 'none', resize: 'none' as const,
    boxSizing: 'border-box',
  })

  return (
    <section id="contato" style={{ borderTop: '1px solid #E4E2DE', padding: '96px max(24px, 5vw)', maxWidth: '1100px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
        04 — Contato
      </p>
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.15, color: '#1A1A18', marginBottom: '48px' }}>
        Vamos conversar
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '80px', alignItems: 'start' }}>
        {/* Social links */}
        <div>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.6rem', marginBottom: '16px', letterSpacing: '-0.03em', color: '#1A1A18' }}>
            Aberto a oportunidades
          </h3>
          <p style={{ color: '#7A7A72', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '32px' }}>
            Estou disponível para projetos freelance, posições full-stack e oportunidades internacionais.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none',
                color: '#1A1A18', fontSize: '0.9rem', padding: '12px 16px',
                border: '1px solid #E4E2DE', borderRadius: '10px', background: '#FFFFFF',
              }}>
                <div style={{ width: '36px', height: '36px', background: '#F7F5F2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                  {s.icon}
                </div>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7A7A72', fontWeight: 500 }}>
              Nome
            </label>
            <input
              type="text" placeholder="Seu nome" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle('name')}
            />
            {errors.name && <span style={{ fontSize: '0.78rem', color: '#e53e3e' }}>{errors.name}</span>}
          </div>

          {/* Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7A7A72', fontWeight: 500 }}>
              E-mail
            </label>
            <input
              type="email" placeholder="seu@email.com" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={inputStyle('email')}
            />
            {errors.email && <span style={{ fontSize: '0.78rem', color: '#e53e3e' }}>{errors.email}</span>}
          </div>

          {/* Message */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7A7A72', fontWeight: 500 }}>
              Mensagem
            </label>
            <textarea
              placeholder="Escreva sua mensagem..." value={form.message} rows={5}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={inputStyle('message')}
            />
            {errors.message && <span style={{ fontSize: '0.78rem', color: '#e53e3e' }}>{errors.message}</span>}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              background: status === 'loading' ? '#7A7A72' : '#1A1A18',
              color: 'white', border: 'none', padding: '14px 28px',
              borderRadius: '100px', fontFamily: 'inherit', fontSize: '0.9rem',
              fontWeight: 500, cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              alignSelf: 'flex-start', transition: 'background 0.2s',
            }}
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar mensagem →'}
          </button>

          {status === 'success' && (
            <p style={{ fontSize: '0.85rem', color: '#2D6A4F' }}>Mensagem enviada! Em breve retorno. ✓</p>
          )}
          {status === 'error' && (
            <p style={{ fontSize: '0.85rem', color: '#e53e3e' }}>Erro ao enviar. Tente novamente ou me contate por e-mail.</p>
          )}
        </form>
      </div>
    </section>
  )
}
