"use client"

import styles from './styles.module.css'

// terms of service 
// footer om inloggad annars bara header i layout. 
// lista som innehåller länkar till: Allmänna vilkor, integritetspolicy och fullmakt.

import { useState } from "react";

import Mandate from "../components/support/mandate";
import Terms from "../components/support/terms";
import Integrity from "../components/support/integrity";


// Prop för att visa vilken undersida som är öppnad?
export default function Support() {
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);

    function toggleActive1() {
        setActive1(true);
        setActive2(false);
        setActive3(false);
    }

    function toggleActive2() {
        setActive1(false);
        setActive2(true);
        setActive3(false);
    }

    function toggleActive3() {
        setActive1(false);
        setActive2(false);
        setActive3(true);
    }

    return (
    <>
    <h1>Support</h1>
    <ul>
        {/* {
            supportList?.map((support:any, index) => (
                <li key={index}>
                    <span>{support}</span>
                </li>
        ))} */}
        <li>
            <div onClick={toggleActive1}>
                <h1>Integritetspolicy</h1>
                <section className={isActive1 ? styles.display : styles.hide}>
                    <Integrity />
                </section>
            </div>
        </li>
        <li>
            <div onClick={toggleActive2}>
                <h1>Fullmakt</h1>
                <section className={isActive2 ? styles.display : styles.hide}>
                    <Mandate />
                </section>
            </div>
        </li>
        <li>
            <div onClick={toggleActive3}>
                <h1>Användarvillkor</h1>
                <section className={isActive3 ? styles.display : styles.hide}>
                    <Terms />
                </section>
            </div>
        </li>
    </ul>
    </>
    
    )
}