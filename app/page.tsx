import Login from "./components/login/login";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "@/lib/database.types";
import Link from "next/link";
import Image from "next/image";
import altLogo from "app/public/images/alt-logo.svg";
import styles from "./page.module.css";
import mascot from "@/app/public/images/mascot.svg";

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
        <h1 className={styles.h1}>Abonnenten - dina abonnemang på ett ställe</h1>
        <Image className={styles.mascot} src={mascot} alt="mascot icon" />
        <div className={styles.altLogoWrapper}>
        {/* <svg width="174" height="88" viewBox="0 0 174 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M131.079 43.5173C131.079 54.0866 127.31 63.7754 121.042 71.3129C109.973 67.2289 102.08 56.5847 102.08 44.0971C102.08 31.3368 110.321 20.5013 121.772 16.6232C127.601 24.0246 131.079 33.3648 131.079 43.5173ZM53.3871 16.6229C61.3523 6.51034 73.7075 0.017334 87.5792 0.017334C101.451 0.017334 113.806 6.51046 121.772 16.6232C124.693 15.6337 127.824 15.0971 131.08 15.0971C141.74 15.0971 151.057 20.8491 156.096 29.4187C149.73 30.9503 145 36.6812 145 43.5168C145 50.5583 150.02 56.4275 156.676 57.7418C151.794 66.8794 142.163 73.0971 131.08 73.0971C127.551 73.0971 124.17 72.4669 121.042 71.3129C113.063 80.9084 101.034 87.0173 87.5792 87.0173C74.1242 87.0173 62.096 80.9085 54.1168 71.3132C65.1864 67.2294 73.0797 56.585 73.0797 44.0971C73.0797 31.3365 64.8379 20.5008 53.3871 16.6229ZM18.9019 29.697C23.9018 20.9738 33.3045 15.0971 44.0798 15.0971C47.3354 15.0971 50.4657 15.6336 53.3871 16.6229C47.5574 24.0243 44.0792 33.3646 44.0792 43.5173C44.0792 54.0867 47.8488 63.7757 54.1168 71.3132C50.9892 72.467 47.6081 73.0971 44.0798 73.0971C32.8983 73.0971 23.1948 66.7689 18.3554 57.4986C24.4921 55.8103 29 50.19 29 43.5168C29 37.0433 24.7579 31.5607 18.9019 29.697ZM18.9019 29.697C16.4701 33.9399 15.0798 38.8561 15.0798 44.0971C15.0798 48.9318 16.2629 53.4903 18.3554 57.4986C17.1278 57.8364 15.8349 58.0168 14.5 58.0168C6.49187 58.0168 0 51.5249 0 43.5168C0 35.5087 6.49187 29.0168 14.5 29.0168C16.0347 29.0168 17.5136 29.2552 18.9019 29.697ZM156.676 57.7418C157.589 57.9222 158.534 58.0168 159.5 58.0168C167.508 58.0168 174 51.5249 174 43.5168C174 35.5087 167.508 29.0168 159.5 29.0168C158.328 29.0168 157.188 29.156 156.096 29.4187C158.628 33.7243 160.08 38.7411 160.08 44.0971C160.08 49.0299 158.848 53.675 156.676 57.7418Z" fill="#1F1F1F"/>
</svg> */}

          {/* <Image src={altLogo} alt="Alt logo" /> */}
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
