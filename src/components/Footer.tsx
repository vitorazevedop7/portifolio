export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #E4E2DE',
      padding: '32px max(24px, 5vw)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <p style={{ fontSize: '0.8rem', color: '#7A7A72' }}>© 2025 Vitor Azevedo · Feito com Next.js</p>
      <a href="https://github.com/vitorazevedop7" target="_blank" rel="noopener noreferrer" style={{ color: '#7A7A72', textDecoration: 'none', fontSize: '0.8rem' }}>
        GitHub
      </a>
    </footer>
  )
}
