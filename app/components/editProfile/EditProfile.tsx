"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import type { Database } from "../../../lib/database.types";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleClick = async () => {
    /* await supabase.auth.signUp({
      firstName: firstName,
      lastName: lastName,
      phoneNum: phoneNum,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh(); */
  };

  return (
      <>
        <section>
            <form className={styles.form}>
            <div className={styles.inputWrapper}>
                <label htmlFor="firstName">Förnamn</label>
                <input 
                onChange={(e) => setFirstName(e.target.value)} 
                name="firstName" 
                id="firstName" 
                type="text"
                value={firstName}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="lastName">Efternamn</label>
                <input 
                onChange={(e) => setLastName(e.target.value)} 
                name="lastName" 
                id="lastName" 
                type="text"
                value={lastName}
                />
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="phoneNum">Telefonnnummer</label>
                <input 
                onChange={(e) => setPhoneNum(e.target.value)} 
                name="phoneNum" 
                id="phoneNum" 
                type="tel"
                value={phoneNum}
                />
            </div>
            </form>
            <div className={styles.buttonWrapper}>
                <button onClick={handleClick}>Spara ändringar</button>
            </div>
        </section>
      </>
  )
}