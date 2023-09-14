import Link from "next/link"

export default function Footer(){
    return (
        <footer>
            <hr />
            <ul>
                <li>
                    <Link href={"/dashboard"}>Dashboard</Link>
                </li>
            </ul>
        </footer>
    )
}