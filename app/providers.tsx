'use client'

import { ThemeProvider } from 'next-themes'

interface providerProps {
    children: any;
}

export function Providers({ children }: providerProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}