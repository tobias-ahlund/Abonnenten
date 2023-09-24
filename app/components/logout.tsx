// Login compotent that is imported in app/page.tsx 

"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "../../lib/database.types";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Logout() {

  const supabase = createClientComponentClient<Database>();
  const router = useRouter()

  
    const handleSignOut = async () => {
      await supabase.auth.signOut();
      router.refresh();
      router.push('/');
    };

  return (
      <div>
          <br />
          <button onClick={handleSignOut}>Logga ut</button>
      </div>
  )
}