import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AddSubscription from "../addSubscription";
import EditSubscription from "../editSubscription";
import DeleteSubscription from "../deleteSubscription";
import styles from "./styles.module.css";
import Image from "next/image";
import Placeholder from "app/public/images/Placeholder.svg";
import Netflix from "/app/public/images/netflix.png";
import Apple_tv from "/app/public/images/apple_tv.png";
import Spotify from "/app/public/images/spotify.svg";

export default async function Subscriptions() {
const supabase = createServerComponentClient({ cookies })

let { data: subscriptions, error } = await supabase
    .from('subscriptions')
    .select("id, name, cost, subscription_presets ( logo )")

    console.log(subscriptions && subscriptions)

    const items = subscriptions;
    const totalCostMonth = items?.reduce((total, item) => total + item.cost, 0);
    const totalCostYear = (totalCostMonth && totalCostMonth * 12);

    return (
        <>
            <hr />
            <h1>Mina abonnemang</h1>
            <section className={styles.costWrapper}>
                <div>
                    <p>Totalt månad</p>
                    <p>{totalCostMonth} kr</p>
                </div>
                <div>
                    <p>Totalt år</p>
                    <p>{totalCostYear} kr</p>
                </div>
            </section>
            <ul className={styles.subsWrapper}>
                {subscriptions?.map((subscription, index) => (
                    <li key={index}>
                        <div className={styles.subWrapper}>
                            <div className={styles.logoWrapper}>
                                <Image
                                    key={index}
                                    src={subscription.subscription_presets.logo === "Netflix" ? Netflix 
                                    : subscription.subscription_presets.logo === "Apple_tv" ? Apple_tv 
                                    : subscription.subscription_presets.logo === "Spotify" ? Spotify 
                                    : Placeholder}
                                    alt="subscription icon"
                                />
                            </div>
                            <p>{subscription.name}</p>
                            <p>{subscription.cost} kr/mån</p>
                        </div>
                        <div className={styles.wrapperStatus}>
                            <p>Ingen åtgärd<br /> nödvändig</p>
                        </div>
                    </li>
                ))}
            </ul>
            <AddSubscription />
            <EditSubscription />
            <DeleteSubscription />
        </>
    );
}