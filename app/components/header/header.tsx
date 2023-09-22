'use client'
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SunLogo from "app/public/images/lightmode.svg"
import MoonLogo from "app/public/images/darkmode.svg"
import Logo from "app/public/images/logo_abo.svg"
import styles from "./styles.module.css";
import { MouseEvent } from "react";

import { useTheme } from "next-themes";


export default function Header(){
    const { theme, setTheme} = useTheme();

    const handleMouseEvent = (e: MouseEvent<HTMLElement>) => {
        setTheme(theme == "light" ? "dark" : "light")
        e.preventDefault();
      };

    console.log(theme);
    return (
        <header className={styles.header}>
            <Link className={styles.logoWrapper} href="/">
                <Image priority src={Logo} alt="Abonnenten logo"/>
            </Link>
            <Image src={theme == "light" ? MoonLogo : SunLogo} alt="Light and Darkmode" onClick={handleMouseEvent}/>
        </header>
    )
}