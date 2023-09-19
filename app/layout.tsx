import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header/header'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Abonnenten',
  description: 'Håll koll på dina abonnemang',
}

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      {/* <head>
      <link rel="stylesheet" href="https://use.typekit.net/rie0uwt.css"/> 
      </head> */}
      
      <body className={"elza"}>
      <main>
      <Header></Header>
        {children}
        </main>
        </body>
    </html>
  )
}
