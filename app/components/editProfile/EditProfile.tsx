"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import type { Database } from "../../../lib/database.types";
import { useState } from "react";
import styles from "./styles.module.css";

export default function EditProfile() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState("");
  const [placeholderFirstName, setPlaceholderFirstName] = useState("Inget valt");
  const [placeholderPhoneNum, setPlaceholderPhoneNum] = useState("Inget valt");
  const [placeholderLastName, setPlaceholderLastName] = useState("Inget valt");

  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  FetchInfo();
  async function FetchInfo() {
    let { data } = await supabase
      .from("user_info")
      .select("first_name, last_name, phone_number")

      if (data && data.length != 0) {
        if (data[0].first_name) {
          setPlaceholderFirstName(data[0].first_name);
        }

        if (data[0].last_name) {
          setPlaceholderLastName(data[0].last_name);
        }

        if (data[0].phone_number) {
          setPlaceholderPhoneNum(data[0].phone_number);
        }
      }
  }

  const handleClick = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    const user_id = session?.user.id;

    if (session) {
      if (firstName && !lastName && !phoneNum) {
        const { data, error } = await supabase 
          .from("user_info")
          .update([
            { 
              first_name: firstName, 
            }
          ])
          .eq("user_id", user_id)
      
        router.refresh(); 
      };

      if (!firstName && lastName && !phoneNum) {
        const { data, error } = await supabase 
          .from("user_info")
          .update([
            { 
              last_name: lastName, 
            }
          ])
          .eq("user_id", user_id)
      
        router.refresh(); 
      };

      if (!firstName && !lastName && phoneNum) {
        const { data, error } = await supabase 
          .from("user_info")
          .update([
            { 
              phone_number: phoneNum,
            }
          ])
          .eq("user_id", user_id)
      
        router.refresh(); 
      };

      if (firstName && lastName && !phoneNum) {
        const { data, error } = await supabase 
          .from("user_info")
          .update([
            { 
              first_name: firstName, 
              last_name: lastName, 
            }
          ])
          .eq("user_id", user_id)
      
        router.refresh(); 
      };

      if (!firstName && lastName && phoneNum) {
        const { data, error } = await supabase 
          .from("user_info")
          .update([
            { 
              last_name: lastName, 
              phone_number: phoneNum,
            }
          ])
          .eq("user_id", user_id)
      
        router.refresh(); 
      };

      if (firstName && !lastName && phoneNum) {
        const { data, error } = await supabase 
          .from("user_info")
          .update([
            { 
              first_name: firstName, 
              phone_number: phoneNum,
            }
          ])
          .eq("user_id", user_id)
      
        router.refresh(); 
      };

      if (firstName && lastName && phoneNum) {
        const { data, error } = await supabase 
          .from("user_info")
          .update([
            { 
              first_name: firstName, 
              last_name: lastName, 
              phone_number: phoneNum,
            }
          ])
          .eq("user_id", user_id)
      
        router.refresh(); 
      };
    } 
  }

  return (
      <>
        <section>
            <form className={styles.form}>
              <div className={styles.inputWrapper}>
                  <label htmlFor="firstName">Förnamn</label>
                  <input 
                  onChange={(e) => setFirstName(e.target.value)} 
                  name="firstName" 
                  id="firstName" 
                  type="text"
                  value={firstName}
                  placeholder={placeholderFirstName}
                  />
              </div>
              <div className={styles.inputWrapper}>
                  <label htmlFor="lastName">Efternamn</label>
                  <input 
                  onChange={(e) => setLastName(e.target.value)} 
                  name="lastName" 
                  id="lastName" 
                  type="text"
                  value={lastName}
                  placeholder={placeholderLastName}
                  />
              </div>
              <div className={styles.inputWrapper}>
                  <label htmlFor="phoneNum">Telefonnnummer</label>
                  <input 
                  onChange={(e) => setPhoneNum(e.target.value)} 
                  name="phoneNum" 
                  id="phoneNum" 
                  type="tel"
                  value={phoneNum}
                  placeholder={placeholderPhoneNum}
                  />
              </div>
              <div>
                <h2>Välj hur du vill få aviseringar</h2>
                <div className={styles.notificationWrapper}>
                  <input 
                    type="radio" 
                    name="notifChoice"
                  />
                  <label>Appnotiser</label>
                </div>
                <div className={styles.notificationWrapper}>
                  <input 
                    type="radio" 
                    name="notifChoice"
                  />
                  <label>Mejl</label>
                </div>
              </div>
            </form>
            <div className={styles.buttonWrapper}>
                <button className={styles.saveButton} onClick={handleClick}>Spara ändringar</button>
            </div>
        </section>
      </>
  )
}