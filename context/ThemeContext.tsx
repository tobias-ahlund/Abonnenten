'use client'

import { createContext, useContext, useState } from 'react';

type Theme = {
    isDarkMode: boolean;
    toggleTheme: Function;
};

export const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider= ({ children }:{children: React.ReactNode}) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        console.log("Theme:", theme);
    };
    
    const theme: Theme = {
        isDarkMode, 
        toggleTheme,
    }

    return ( 
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext) as Theme;