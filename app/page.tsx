import Login from "./components/login";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "@/lib/database.types";
import Subscriptions from "./components/subscriptions";
import DeleteUser from "./components/deleteUser";
import Link from "next/link";
import Image from "next/image";
import altLogo from "app/public/images/alt-logo.svg";


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
      <section className="greeting-section">
        <h1>Spara pengar på dina prenumerationer</h1>
        <div className="altLogoWrapper">
          <Image src={altLogo} alt="Alt logo" />
        </div>
      </section>
      <Login/>
      <section className="greeting-paragraph">
        <p className="greeting-paragraph">
          Genom att fortsätta godkänner du Abonnentens <span><Link href="/support">allmäna villkor</Link></span>, <span><Link href="/support">integritetspolicy</Link></span> och att vi får inhämta avtalsinformation enligt <span><Link href="/support">informationsfullmakten</Link></span>.
        </p>
      </section>
    </>
  )
}
