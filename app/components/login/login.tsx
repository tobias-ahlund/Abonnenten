"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import type { Database } from "../../../lib/database.types";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async () => {
      await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      router.refresh();
    };
  
    const handleSignIn = async () => {
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      router.refresh();
    };
  
  return (
      <>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <label htmlFor="email">Mejl</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              name="email" 
              placeholder="exempel@mejl.com"
              id="email" 
              type="email"
              value={email}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label 
              htmlFor="password">
                Lösenord
            </label>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              name="password" 
              id="password" 
              type="password"
              value={password}
            />
          </div>
        </form>
        <section className={styles.buttonWrapper}>
          <button onClick={handleSignIn}>Logga in</button>
          <button className={styles.signUpButton} onClick={handleSignUp}>Bli medlem</button>
        </section>
      </>
  )
}