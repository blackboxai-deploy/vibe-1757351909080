import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DokumentPro - AI-Assisterade Professionella Dokument',
  description: 'Skapa juridiskt korrekta dokument på minuter med AI-hjälp. Anställningsintyg, hyresavi, läkarintyg och mer. Säkert och enkelt.',
  keywords: 'dokument, anställningsintyg, hyresavi, läkarintyg, AI, juridisk, sverige',
  robots: 'index, follow',
  openGraph: {
    title: 'DokumentPro - AI-Assisterade Professionella Dokument',
    description: 'Skapa juridiskt korrekta dokument på minuter med AI-hjälp',
    type: 'website',
    locale: 'sv_SE',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}