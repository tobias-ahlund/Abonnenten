"use client"

import styles from './styles.module.css'
import Link from "next/link"
import Image from "next/image"
import { footerLinkArray } from "./footerLink"
import { usePathname } from "next/navigation"

import DashboardLogoActive from "app/public/images/logo_bottom-nav-active.svg"

export default function Footer(){
    const path = usePathname();
   
    return (
        <footer className={styles.footer}>
            <nav>
                <ul className={styles.ul}>
                    {footerLinkArray.map(footerLink => {return(
                    <li>
                        <Link href={footerLink.href}>
                            <Image priority 
                                src={path === "/dashboard" && footerLink.href === "/dashboard" ? DashboardLogoActive : footerLink.src}
                                alt={footerLink.alt} 
                            />
                        </Link>
                    </li>)})}
                </ul>
            </nav>
        </footer>
    )
}