'use client'

import { ThemeProvider } from 'next-themes'

interface providerProps {
    children: any;
    attribute: any;
}

export function Providers({ children, attribute }: providerProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}