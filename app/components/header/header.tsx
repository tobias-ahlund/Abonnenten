'use client'
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SunLogo from "app/public/images/lightmode.svg"
import MoonLogo from "app/public/images/darkmode.svg"
import Logo from "app/public/images/logo_abo.svg"
import styles from "./styles.module.css";
import { useTheme } from "@/context/ThemeContext";
import { MouseEvent } from "react";


export default function Header(){

    const { isDarkMode, toggleTheme} = useTheme();

    const handleMouseEvent = (e: MouseEvent<HTMLElement>) => {
        toggleTheme()
        e.preventDefault();
      };

    return (
        <header>
            <Link href="/">
                <Image priority src={Logo} alt="Abonnenten logo"/>
            </Link>
            <Image src={isDarkMode ? MoonLogo: SunLogo} alt="Light and Darkmode" onClick={handleMouseEvent}/>
        </header>
    )
}