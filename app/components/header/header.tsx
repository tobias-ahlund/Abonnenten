import Link from "next/link";

export default function Header(){
    return (
        <header>
            <div>
                <Link href="/">
                    <div>
                        <p>Logo</p>
                        <p>Abonnenten</p>
                    </div>
                </Link>
                <p>Mörkt/ljust läge</p>
            </div>
            <hr />
        </header>
    )
}