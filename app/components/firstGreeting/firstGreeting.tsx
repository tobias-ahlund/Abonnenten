"use client"

import Cat1 from "app/public/images/icons_category-1.svg";
import Cat2 from "app/public/images/icons_category-2.svg";
import Cat3 from "app/public/images/icons_category-3.svg";
import Cat4 from "app/public/images/icons_category-4.svg";
import Cat5 from "app/public/images/icons_category-5.svg";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function FirstGreeting() {
    return (
        <section className={styles.greetingWrapper}>
            <div>
                <Image src={Cat1} alt="categories icons container" />
                <Image src={Cat2} alt="categories icons container" />
                <Image src={Cat3} alt="categories icons container" />
                <Image src={Cat4} alt="categories icons container" />
                <Image src={Cat5} alt="categories icons container" />
            </div>
            <div>
                <p>Lägg till dina abonnemang, så ser vi till att du alltid får bra priser och villkor.
                <br /><br />
                -Bättre översikt av abonnemang
                <br /><br />
                -Erbjudanden direkt i appen
                <br /><br />
                -Hitta de billigaste alternativen</p>
                <Link href="/dashboard/subscriptions"><button>Lägg till abonnemang</button></Link>
            </div>
        </section>
    );
}