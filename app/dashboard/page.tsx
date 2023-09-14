// Startsida för inloggade användare
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { cookies } from "next/headers";


export default async function Dashboard() {
const supabase = createServerComponentClient({ cookies });;

  const { data: { user } } = await supabase.auth.getUser();

  let { data: subscriptions, error } = await supabase
    .from('subscriptions')
    .select("id,name,cost")

    return(
        <>
        God morgon, {user?.email}!
        <ul>
                {subscriptions?.map((subscription, index) => (
                    <li key={index}>
                        <span>Id: {subscription.id}</span>
                        <br />
                        <span>Namn: {subscription.name}</span>
                        <br />
                        <span>Kostnad: {subscription.cost} kr/mån</span>
                    </li>
                ))}
            </ul>
        </>
    );
    
}