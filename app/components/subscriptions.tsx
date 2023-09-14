import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AddSubscription from "./addSubscription";
import EditSubscription from "./editSubscription";
import DeleteSubscription from "./deleteSubscription";

export default async function Subscriptions() {
const supabase = createServerComponentClient({ cookies })

let { data: subscriptions, error } = await supabase
    .from('subscriptions')
    .select("id,name,cost")
    
    return (
        <div>
            <hr />
            <h2>Dina prenumerationer</h2>
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
            <AddSubscription />
            <EditSubscription />
            <DeleteSubscription />
        </div>
    );
}