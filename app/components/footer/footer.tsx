import Link from "next/link"

export default function Footer(){
    return (
        <footer>
            <hr />
            <nav>
                <ul>
                    <li>
                        <Link href={"/dashboard"}>Hem</Link>
                    </li>
                    <li>
                        <Link href={"/dashboard/abonnemang"}>Abonnemang</Link>
                    </li>
                    <li>
                        <Link href={"/dashboard"}>FAQ</Link>
                    </li>
                    <li>
                        <Link href={"/dashboard/profile"}>Profil</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}