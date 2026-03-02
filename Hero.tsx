export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '80px max(24px, 5vw) 96px',
      maxWidth: '1100px', margin: '0 auto',
    }}>
      <p style={{ fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A7A72', marginBottom: '20px' }}>
        Engenheiro de Software · BH, Brasil
      </p>
      <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(3rem, 8vw, 6.5rem)', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '28px', color: '#1A1A18' }}>
        Vitor<br /><em style={{ fontStyle: 'italic', color: '#2D6A4F' }}>Azevedo</em>
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#7A7A72', maxWidth: '520px', fontWeight: 300, lineHeight: 1.7, marginBottom: '40px' }}>
        Desenvolvedor full-stack apaixonado por construir produtos digitais limpos, funcionais e com propósito real.
      </p>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="#projetos" style={{
          background: '#1A1A18', color: 'white', textDecoration: 'none',
          padding: '12px 28px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 500,
        }}>
          Ver projetos
        </a>
        <a href="#contato" style={{ color: '#7A7A72', textDecoration: 'none', fontSize: '0.9rem' }}>
          Entre em contato →
        </a>
      </div>
      <div style={{ marginTop: '80px', display: 'flex', alignItems: 'center', gap: '12px', color: '#7A7A72', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
        <div style={{ width: '40px', height: '1px', background: '#E4E2DE' }} />
        <span>SCROLL</span>
      </div>
    </section>
  )
}
