// Startsida för inloggade användare
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { cookies } from "next/headers";
import page from "./page.module.css";
import FirstGreeting from "../components/firstGreeting/firstGreeting";
import Logout from "../components/logout/logout";

export default async function Dashboard() {
const supabase = createServerComponentClient({ cookies });

    const currentHour = new Date().getHours(); 
    let greeting;

    if (currentHour >= 4 && currentHour < 10) {
        greeting = "Good morgon";
    } else if (currentHour >= 10 && currentHour < 17) {
        greeting = "God dag";
    } else {
        greeting = "God kväll";
    } 

  const { data: { user } } = await supabase.auth.getUser();

  let firstName = "!";

  if (user) {
    const { data } = await supabase
        .from("user_info")
        .select("first_name")

        if (data) {
            if (data[0].first_name) {
                firstName = `, ${data[0].first_name}!`;
            }
        }
  }

  let { data: subscriptions, error } = await supabase
    .from('subscriptions')
    .select("id,name,cost")

    return(
        <>
        <h1 className={page.h1BigTop}>{greeting}{firstName}</h1>
        <h2>Abonnemang</h2>
        <FirstGreeting />
        {/* <ul>
                {subscriptions?.map((subscription, index) => (
                    <li key={index}>
                        <p>Id: {subscription.id}</p>
                        <br />
                        <p>Namn: {subscription.name}</p>
                        <br />
                        <p>Kostnad: {subscription.cost} kr/mån</p>
                    </li>
                ))}
            </ul> */}
        <Logout />
        </>
    );
    
}