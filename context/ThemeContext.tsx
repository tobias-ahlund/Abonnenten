'use client'

import React from 'react';
import { createContext, useContext, useState} from 'react';

// type Theme = {
//     isDarkMode: boolean,
//     toggleTheme: () => void;

// };

type Theme = "light" | "dark" ;

interface Props {
    children: React.ReactNode;
}

export const ThemeContext = createContext<Theme>("light");

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = React.useState<Theme>('light');

    // const toggleTheme = () => {
    //     setIsDarkMode(!isDarkMode);
    //     document.documentElement.classList.toggle('dark');
    // };

    // const Theme = {
    //     isDarkMode,
    //     toggleTheme
    // }
    
    return ( 
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>

    )

}