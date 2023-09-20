import Link from "next/link";
import Image from "next/image";
import Logo from "app/public/images/logo_brand.svg"

export default function Header(){
    return (
        <header>
            <div>
                <Link href="/">
                <Image priority src={Logo} alt="Abonnenten logo"/>
                </Link>
                <p>Mörkt/ljust läge</p>
            </div>
            <hr />
        </header>
    )
}