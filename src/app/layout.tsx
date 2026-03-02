import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Vitor Azevedo — Software Engineer',
  description: 'Portfólio profissional de Vitor Azevedo, desenvolvedor full-stack e estudante de Engenharia de Software na PUC Minas.',
  openGraph: {
    title: 'Vitor Azevedo — Software Engineer',
    description: 'Desenvolvedor full-stack | React, Next.js, Node.js',
    url: 'https://vitor-portfolio.vercel.app',
    siteName: 'Vitor Azevedo',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans, sans-serif)' }}>
        <ClientProviders>
          {children}
        </ClientProviders>
        <Footer />
      </body>
    </html>
  )
}
