//code global = à mettre dans un app.js ou laisser tel quel ?

import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) //police d'écritures

export const metadata = { //métadonnées du site, pour SEO
  title: 'valverine - Développeuse web',
  description: 'Le portfolio de valverine aka Valentine B. Développeuse web full-stack / ancienne journaliste. Besoin de mes services ? Contactez-moi !',
  category: 'technology',
  twitter: {
    card: 'summary_large_image',
    title: 'valverine - Développeuse Web',
    // url:'',
    description: 'Bienvenue sur le portfolio de valverine. Développeuse web full-stack',
    creator: '@valverine_',
    // images: [''],
  },
  openGraph: {
      title: 'valverine - Développeuse web',
      description: 'Bienvenue sur le portfolio de valverine. Développeuse web full-stack',
      // url: '',
      // siteName: '',
      // images:,
  },
  locale: 'fr_FR',
  type: 'website',
}

//structure de la page, children = charge page selon la route, page de app = '/'
//inter.classname = charge la police d'écriture prédéfinie
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>      
      </body>
    </html>
  )
}
