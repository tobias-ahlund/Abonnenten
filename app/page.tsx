import Login from "./components/login/login";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "@/lib/database.types";
import Subscriptions from "./components/subscriptions";
import DeleteUser from "./components/deleteUser";
import Link from "next/link";
import Image from "next/image";
import altLogo from "app/public/images/alt-logo.svg";
import styles from "./page.module.css";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user_id = session?.user.id;
  console.log(user_id);

  const { data: { user } } = await supabase.auth.getUser();
  
  // Add row to user_info table if user is verified and does not already have a row
  if (session) {
    const { data, error } = await supabase
      .from("user_info")
      .select()
      .eq("user_id", user_id)
      
      // Row does not exist if data array is empty, proceeds to add row
      if (data?.length == 0) {
        console.log("empty")
        const { data, error } = await supabase
          .from("user_info")
          .insert({ user_id: user_id })
      }

    redirect("/dashboard");
  } 

  return (
    <>
      <section className={styles.greetingSection}>
        <h1>Spara pengar på dina prenumerationer</h1>
        <div className={styles.altLogoWrapper}>
          <Image src={altLogo} alt="Alt logo" />
        </div>
      </section>
      <Login/>
      <section className={styles.greetingParagraph}>
        <p>
          Genom att fortsätta godkänner du Abonnentens <span><Link href="/support">allmäna villkor</Link></span>, <span><Link href="/support">integritetspolicy</Link></span> och att vi får inhämta avtalsinformation enligt <span><Link href="/support">informationsfullmakten</Link></span>.
        </p>
      </section>
    </>
  )
}
