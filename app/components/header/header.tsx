'use client'
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SunLogo from "app/public/images/lightmode.svg"
import MoonLogo from "app/public/images/darkmode.svg"
import Logo from "app/public/images/logo_abo.svg"
import styles from "./styles.module.css";
import { MouseEvent } from "react";

import { useTheme } from "next-themes";

type Props = {
    className?: string 
}


export default function Header(styleProp : Props){
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }    

    const handleMouseEvent = (e: MouseEvent<HTMLElement>) => {
        setTheme(theme == "light" ? "dark" : "light")
        e.preventDefault();
      };

      console.log(styleProp.className);
      

    return (
        <header className={styleProp.className}>
            <Link className={styles.logoWrapper} href="/">
                <Image priority src={Logo} alt="Abonnenten logo"/>
            </Link>
            <Image src={theme == "light" ? MoonLogo : SunLogo} alt="Light and Darkmode" onClick={handleMouseEvent}/>
        </header>
    )
}
// {!session ? : 
//               (<main>
//                 {children}
//               </main>)}