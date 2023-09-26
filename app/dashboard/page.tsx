// Startsida för inloggade användare
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { cookies } from "next/headers";
import page from "./page.module.css";


export default async function Dashboard() {
const supabase = createServerComponentClient({ cookies });;

  const { data: { user } } = await supabase.auth.getUser();

  let firstName = "!";

  if (user) {
    const { data } = await supabase
        .from("user_info")
        .select("first_name")

        if (data) {
            firstName = `, ${data[0].first_name}!`;
        }
  }

  let { data: subscriptions, error } = await supabase
    .from('subscriptions')
    .select("id,name,cost")

    return(
        <>
        <h1 className={page.h1BigTop}>God morgon{firstName}</h1>
        <h2>Att göra</h2>
        <ul>
                {subscriptions?.map((subscription, index) => (
                    <li key={index}>
                        <p>Id: {subscription.id}</p>
                        <br />
                        <p>Namn: {subscription.name}</p>
                        <br />
                        <p>Kostnad: {subscription.cost} kr/mån</p>
                    </li>
                ))}
            </ul>
        </>
    );
    
}