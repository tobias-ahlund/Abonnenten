// Login compotent that is imported in app/page.tsx 

"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import type { Database } from "../../lib/database.types";
import { useState } from "react";

// interface LoginProps {
//   signedIn: boolean;
// }

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
  
    const handleSignOut = async () => {
      await supabase.auth.signOut();
      router.refresh();
    };

  return (
      <div>
          <>
            <form>
              <div className="input-wrapper">
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
              <div className="input-wrapper">
                <label 
                  className="password-label"
                  htmlFor="password">
                    Lösenord
                </label>
                <input 
                  className="password-input"
                  onChange={(e) => setPassword(e.target.value)} 
                  name="password" 
                  id="password" 
                  type="password"
                  value={password}
                />
              </div>
            </form>
          </>
        <>
          <section className="button-wrapper">
            <button onClick={handleSignIn}>Logga in</button>
            <button onClick={handleSignUp}>Bli medlem</button>
          </section>
        </>
      </div>
  )
}