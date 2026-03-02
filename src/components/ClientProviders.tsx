'use client'

import { LanguageProvider } from '@/contexts/LanguageContext'
import Nav from '@/components/Nav'
import { ReactNode } from 'react'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Nav />
      {children}
    </LanguageProvider>
  )
}
