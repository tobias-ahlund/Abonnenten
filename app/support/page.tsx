"use client"

import styles from './styles.module.css'
import Image from 'next/image';
import Cross from "app/public/images/Cross.svg";

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
        setActive1(!isActive1);
        setActive2(false);
        setActive3(false);
    }

    function toggleActive2() {
        setActive1(false);
        setActive2(!isActive2);
        setActive3(false);
    }

    function toggleActive3() {
        setActive1(false);
        setActive2(false);
        setActive3(!isActive3);
    }

    return (
    <>
        {isActive1 ? "" : isActive2 ? "" : isActive3 ? "" : <><h1>Support</h1><hr /></>} 
        <section className={styles.menuWrapper}>
            <article className={[styles.menuItem, isActive1 && styles.orderTop].join(" ")}>
                <div onClick={toggleActive1}>
                    <div className={styles.menuItemHeading}>
                        <h2>Integritetspolicy</h2>
                        <Image 
                            className={[styles.cross, isActive1 ? styles.display : styles.hide].join(" ")} 
                            onClick={toggleActive1} 
                            src={Cross} alt="close button" 
                        />
                    </div>
                    <div className={isActive1 ? styles.display : styles.hide}>
                        <Integrity />
                    </div>
                </div>
                <hr />
            </article>
            <article className={[styles.menuItem, isActive2 && styles.orderTop].join(" ")}>
                <div onClick={toggleActive2}>
                    <div className={styles.menuItemHeading}>
                        <h2>Fullmakt</h2>
                        <Image 
                            className={[styles.cross, isActive2 ? styles.display : styles.hide].join(" ")} 
                            onClick={toggleActive2} 
                            src={Cross} alt="close button" 
                        />
                    </div>
                    <div className={isActive2 ? styles.display : styles.hide}>
                        <Mandate />
                    </div>
                </div>
                <hr />
            </article>
            <article className={[styles.menuItem, isActive3 && styles.orderTop].join(" ")}>
                <div onClick={toggleActive3}>
                    <div className={styles.menuItemHeading}>
                        <h2>Användarvillkor</h2>
                        <Image 
                            className={[styles.cross, isActive3 ? styles.display : styles.hide].join(" ")} 
                            onClick={toggleActive3} 
                            src={Cross} alt="close button" 
                        />
                    </div>
                    <div className={isActive3 ? styles.display : styles.hide}>
                        <Terms />
                    </div>
                </div>
            <hr />
            </article>
            <article className={[styles.menuItem, isActive3 && styles.orderTop].join(" ")}>
                <h2>Exempelrubrik (ej klickbar)</h2>
            </article>
        </section>
    </>
    
    )
}