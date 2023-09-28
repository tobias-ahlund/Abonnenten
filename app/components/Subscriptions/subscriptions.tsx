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
import Tele2 from "@/app/public/images/tele2.svg";
import Friskis from "@/app/public/images/friskis.svg";
import GoteborgEnergi from "@/app/public/images/goteborg_energi.svg";
import LuleaEnergi from "@/app/public/images/lulea_energi.svg";
import Arrow from "@/app/public/images/arrow.svg";

export default async function Subscriptions() {
const supabase = createServerComponentClient({ cookies })

let { data: subscriptions, error } = await supabase
    .from('subscriptions')
    .select("id, name, cost, subscription_presets ( logo )") 

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

            <div className={styles.dropdown}>
                <div className={styles.dropdownButton}>
                    <p>Se abonnemang</p>
                </div>
                <div>
                    <Image className={styles.arrow} src={Arrow} alt="dropdown arrow button" />
                </div>
            </div>
            <ul className={styles.subsDropdown}>
                {subscriptions?.map((subscription, index) => (
                    <li key={index}>
                        <div className={styles.subDropdown}>
                            <div className={styles.logoDropdownWrapper}>
                                <Image
                                    key={index}
                                    src={
                                        subscription.name.includes("Netflix") 
                                        ? Netflix 
                                        : subscription.name.includes("Apple")
                                        ? Apple_tv 
                                        : subscription.name.includes("Spotify") 
                                        ? Spotify 
                                        : subscription.name.includes("Göteborg")
                                        ? GoteborgEnergi
                                        : subscription.name.includes("Luleå")
                                        ? LuleaEnergi
                                        : subscription.name.includes("Friskis")
                                        ? Friskis
                                        : subscription.name.includes("Tele2")
                                        ? Tele2
                                        : Placeholder
                                    }
                                    alt="subscription icon"
                                />
                            </div>
                            <p>{subscription.name}</p>
                        </div>
                        <hr className={styles.hr} />
                    </li>
                ))}
            </ul>

            <ul className={styles.subsWrapper}>
                {subscriptions?.map((subscription, index) => (
                    <li key={index}>
                        <div className={styles.subWrapper}>
                            <div className={styles.logoWrapper}>
                                <Image
                                    key={index}
                                    src={
                                        subscription.name.includes("Netflix") 
                                        ? Netflix 
                                        : subscription.name.includes("Apple")
                                        ? Apple_tv 
                                        : subscription.name.includes("Spotify") 
                                        ? Spotify 
                                        : subscription.name.includes("Göteborg")
                                        ? GoteborgEnergi
                                        : subscription.name.includes("Luleå")
                                        ? LuleaEnergi
                                        : subscription.name.includes("Friskis")
                                        ? Friskis
                                        : subscription.name.includes("Tele2")
                                        ? Tele2
                                        : Placeholder
                                    }
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