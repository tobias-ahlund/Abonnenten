'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "app/public/images/logo_abo.svg"
import styles from "./styles.module.css";
import { useTheme } from "@/context/ThemeContext";

export default function Header(){

    const theme = useTheme();

    return (
        <header>
            <Link href="/">
                <Image priority src={Logo} alt="Abonnenten logo"/>
            </Link>
            <p>Mörkt/ljust läge</p>
        </header>
    )
}