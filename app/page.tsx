import Login from "./components/login";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "@/lib/database.types";
import Subscriptions from "./components/subscriptions";
import DeleteUser from "./components/deleteUser";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: { user } } = await supabase.auth.getUser();
  
  if (session) {
    redirect("/dashboard");
  } 
  

  return (
    <>
      <h1>Spara pengar på dina abonnemang!</h1>
      <Login/>
    </>
  )
}
