import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AddSubscription from "./addSubscription";

export default async function Subscriptions() {
const supabase = createServerComponentClient({ cookies })

let { data: subscriptions, error } = await supabase
  .from('subscriptions')
  .select("name,cost")

async function test() {
    const { data } = await supabase
    .from("subscriptions")
    .insert([
        { 
        name: "test",
        cost: "100",
        },
    ])
}

test();
    
    return (
        <div>
            <hr />
            <h2>Dina prenumerationer</h2>
            <ul>
            {subscriptions?.map((subscription, index) => (
                <li key={index}>
                <span>Namn: {subscription.name}</span>
                <br />
                <span>Kostnad: {subscription.cost} kr/mån</span>
                </li>
            ))}
            </ul>
            <AddSubscription />
        </div>
    );
}