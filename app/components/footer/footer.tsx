"use client"

import styles from './styles.module.css'
import Link from "next/link"
import Image from "next/image"
import { footerLinkArray } from "./footerLink"
import { usePathname } from "next/navigation"

export default function Footer(){
    const currentPath = usePathname();
   
    return (
        <footer className={styles.footer}>
            <nav>
                <ul className={styles.ul}>
                    {footerLinkArray.map((footerLink, index) => {return(
                    <li key={index}>
                        <Link href={footerLink.href}>
                            <Image priority 
                                src={currentPath === footerLink.href ? footerLink.altSrc : footerLink.src}
                                alt={footerLink.alt} 
                            />
                        </Link>
                    </li>)})}
                </ul>
            </nav>
        </footer>
    )
}