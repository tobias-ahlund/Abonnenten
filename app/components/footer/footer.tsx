import styles from './styles.module.css'
import Link from "next/link"
import Image from "next/image"
import { footerLinkArray } from "./footerLink"


export default function Footer(){
    return (
        <footer className={styles.footer}>
            <hr />
            <nav>
                <ul className={styles.ul}>
                    {footerLinkArray.map(footerLink => {return(
                    <li>
                        <Link href={footerLink.href}>
                            <Image priority src={footerLink.src} alt={footerLink.alt}/>
                        </Link>
                    </li>)})}
                </ul>
            </nav>
        </footer>
    )
}