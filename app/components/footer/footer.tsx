import styles from './styles.module.css'
import Link from "next/link"
import Image from "next/image"
import DashboardLogo from "app/public/images/logo_bottom-nav.svg"
import SubscriptionsLogo from "app/public/images/logo_bottom-nav-1.svg"
import SupportLogo from "app/public/images/logo_bottom-nav-2.svg"
import ProfileLogo from "app/public/images/logo_bottom-nav-3.svg"
import footerLink from "./footerLink"

type FooterLink = {
    href: string;
    src: string;
    alt: string;
}

const footerLinkArray: FooterLink[] =
 [ { href: '/dashboard',
   src: DashboardLogo,
   alt: 'Dashboard logo'
 },
 { 
   href: '/dashboard/subscriptions',
   src: SubscriptionsLogo,
   alt: 'Subscriptions logo'
 },
 { 
   href: '/support',
   src: SupportLogo,
   alt: 'Support logo'
 },
 { 
   href: '/dashboard/profile',
   src: ProfileLogo,
   alt: 'Profile logo'
 }
]

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