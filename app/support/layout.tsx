// import './globals.css'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const supabase = createServerComponentClient<Database>({ cookies });

    const {
        data: { session },
      } = await supabase.auth.getSession();

  return (
    <>
        {children}
    {session && <Footer/>}
    </>
  )
}