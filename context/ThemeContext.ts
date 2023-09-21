'use client'

import React from 'react';
import { createContext, useContext, useState} from 'react';

type Theme = boolean;

export const ThemeContext = createContext<Theme>(false);

// const useGetTheme = () => useContext(ThemeContext);

// export const ThemeProvider: React.FC<React.ReactElement> = ({ children }) => {
//     const [isDarkMode, setIsDarkMode] = React.useState<[boolean]>([false]);

//     const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode);
//         document.documentElement.classList.toggle('dark');
//     };


//     return ( 
//         <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
//             {children}
//         </ThemeContext.Provider>

//     )

// }