'use client'

import { createContext, useContext, useState } from 'react';

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
    theme: Theme;
    setTheme(theme: Theme): void;
}

const ThemeContext = createContext<ThemeContextType | null >(null);

const useTheme = () => useContext(ThemeContext);

const ThemeProvider= ({ children }:{ children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light')
    return ( 
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, useTheme}