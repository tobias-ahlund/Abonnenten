import './globals.css'
import type { Metadata } from 'next'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'
import { ThemeContext, ThemeProvider } from '@/context/ThemeContext'
import { useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Providers } from './providers'


export const metadata: Metadata = {
  title: 'Abonnenten',
  description: 'Håll koll på dina abonnemang',
}

export const dynamic = 'force-dynamic'

export default async function RootLayout({ children }: {children: React.ReactNode}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session }
  } = await supabase.auth.getSession();
  

  return (
    <html lang="sv" suppressHydrationWarning>
      <body className={"elza"}>
        <div className='mobile-frame'>
          <Providers>
            <Header/>
              <main>
                {children}
              </main>
              {session && <Footer />}
          </Providers>
        </div>
      </body>
    </html>
  )
}
