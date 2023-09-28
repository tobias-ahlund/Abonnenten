import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AddSubscription from "../addSubscription";
import EditSubscription from "../editSubscription";
import DeleteSubscription from "../deleteSubscription";
import styles from "./styles.module.css";
import Image from "next/image";
import Placeholder from "app/public/images/Placeholder.svg";

export default async function Subscriptions() {
const supabase = createServerComponentClient({ cookies })

let { data: subscriptions, error } = await supabase
    .from('subscriptions')
    .select("id,name,cost")
    
    return (
        <>
            <hr />
            <h1>Mina abonnemang</h1>
            <section className={styles.costWrapper}>
                <div>
                    <p>Totalt månad</p>
                    <p>X kr</p>
                </div>
                <div>
                    <p>Totalt år</p>
                    <p>X kr</p>
                </div>
            </section>
            <ul className={styles.subsWrapper}>
                {subscriptions?.map((subscription, index) => (
                    <li key={index}>
                        <div>
                            {/* <span>Id: {subscription.id}</span>
                            <br /> */}
                            <Image src={Placeholder} alt="subscription icon" />
                            <p>{subscription.name}</p>
                            <p>{subscription.cost} kr/mån</p>
                        </div>
                        <div>
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