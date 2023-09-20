import './globals.css'
import type { Metadata } from 'next'
import Header from './components/header/header'

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
      <body className={"elza"}>
        <div className='mobile-frame'>
        <main>
        <Header/>
          {children}
        </main>
        </div>
      </body>
    </html>
  )
}
