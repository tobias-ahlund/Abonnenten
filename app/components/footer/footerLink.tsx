import Image from "next/image";
import Link from "next/link";

type FooterLink = {
    href: string;
    src: string;
    alt: string;
}


export default function footerLink({href, src, alt}: FooterLink){

    return(
        <li>
            <Link href={href}>
                <Image priority src={src} alt={alt}/>
            </Link>
        </li>
    )

}