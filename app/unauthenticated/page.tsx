import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Database } from "@/lib/database.types";
import Login from "@/app/components/login";

export default async function Unauthenticated() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  let signedIn = false;

  return (
    <div>
      <p>Välommen till Abonnenten. Logga in för att fortsätta.</p>
      <Login/>
    </div>
  );
}
