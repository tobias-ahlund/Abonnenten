// Login compotent that is imported in app/page.tsx 

"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "../../../lib/database.types";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function Logout() {

  const supabase = createClientComponentClient<Database>();
  const router = useRouter()

  
    const handleSignOut = async () => {
      await supabase.auth.signOut();
      router.refresh();
      router.push('/');
    };

  return (
      <div className={styles.logoutButtonWrapper}>
          <button className={styles.logoutButton} onClick={handleSignOut}>Logga ut</button>
      </div>
  )
}