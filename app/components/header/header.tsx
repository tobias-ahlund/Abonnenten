'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SunLogo from "app/public/images/lightmode.svg"
import MoonLogo from "app/public/images/darkmode.svg"
import Logo from "app/public/images/logo_abo.svg"
import styles from "./styles.module.css";
import { MouseEvent } from "react";


export default function Header(){

    // const theme = useTheme();
    // let activeLogo;

    // const handleMouseEvent = (e: MouseEvent<HTMLElement>) => {
        
    //     if (theme?.theme == "light") {
    //         theme.setTheme('dark')
    //     } else {
    //         theme?.setTheme('light')
    //     }
    //     console.log('clicked', theme);
        
    //     e.preventDefault();
    //   };

    return (
        <header className={styles.header}>
            <Link className={styles.logoWrapper} href="/">
                <Image priority src={Logo} alt="Abonnenten logo"/>
            </Link>
            {/* <Image 
            src={theme?.theme == 'light' ? MoonLogo: SunLogo} 
            alt="Light and Darkmode" 
            onClick={handleMouseEvent}
            /> */}
        </header>
    )
}