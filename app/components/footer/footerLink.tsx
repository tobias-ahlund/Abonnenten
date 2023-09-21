"use client"

import Image from "next/image";
import Link from "next/link";
import DashboardLogo from "app/public/images/logo_bottom-nav.svg"
import SubscriptionsLogo from "app/public/images/logo_bottom-nav-1.svg"
import SupportLogo from "app/public/images/logo_bottom-nav-2.svg"
import ProfileLogo from "app/public/images/logo_bottom-nav-3.svg"

import DashboardLogoActive from "app/public/images/logo_bottom-nav-active.svg"
import SubscriptionsLogoActive from "app/public/images/logo_bottom-nav-1-active.svg"
import SupportLogoActive from "app/public/images/logo_bottom-nav-2-active.svg"
import ProfileLogoActive from "app/public/images/logo_bottom-nav-3-active.svg"

type FooterLink = {
    href: string;
    src: string;
    alt: string;
}

export const footerLinkArray: FooterLink[] =
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

export default function footerLink({href, src, alt}: FooterLink){

    return(
        <li>
            <Link href={href}>
                <Image priority src={src} alt={alt}/>
            </Link>
        </li>
    )

}