import Login from "./login";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "@/lib/database.types";
import Subscriptions from "./subscriptions";
import DeleteUser from "./deleteUser";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: { user } } = await supabase.auth.getUser();

  let signedIn = true;

  if (!session) {
    redirect("/unauthenticated");
  } 

  return (
    <>
      <h1>Välkommen till startsidan, {user?.email}</h1>
      <DeleteUser />
      <Login signedIn={signedIn}/>
      <Subscriptions />
    </>
  )
}
