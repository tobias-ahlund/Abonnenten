"use client"

import styles from './styles.module.css'

// terms of service 
// footer om inloggad annars bara header i layout. 
// lista som innehåller länkar till: Allmänna vilkor, integritetspolicy och fullmakt.

import { allmannaVilkor, integritetsPolicy, fullmakt } from "../components/support";

import { useState } from "react";


// Prop för att visa vilken undersida som är öppnad?
export default function Support() {
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    
    const supportList = [allmannaVilkor, integritetsPolicy, fullmakt];

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
                <h1>rad 1</h1>
                <p className={isActive1 ? styles.display : styles.hide}>Blablabla</p>
            </div>
        </li>
        <li>
            <div onClick={toggleActive2}>
                <h1>rad 2</h1>
                <p className={isActive2 ? styles.display : styles.hide}>Blablabla</p>
            </div>
        </li>
        <li>
            <div onClick={toggleActive3}>
                <h1>rad 3</h1>
                <p className={isActive3 ? styles.display : styles.hide}>Blablabla</p>
            </div>
        </li>
    </ul>
    </>
    
    )
}