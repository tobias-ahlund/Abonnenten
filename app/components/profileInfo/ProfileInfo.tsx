"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import type { Database } from "../../../lib/database.types";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import profileIcon1 from "@/app/public/images/profile-icon1.svg";
import profileIcon2 from "@/app/public/images/profile-icon2.svg";
import profileIcon3 from "@/app/public/images/profile-icon3.svg";
import Link from "next/link";

interface ChildProps {
  changeView: (value: boolean) => void;
}

export default function ProfileInfo({ changeView }: ChildProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState("");
  const [placeholderFirstName, setPlaceholderFirstName] = useState("Inget valt");
  const [placeholderPhoneNum, setPlaceholderPhoneNum] = useState("Inget valt");
  const [placeholderLastName, setPlaceholderLastName] = useState("Inget valt");
  const [email, setEmail] = useState<string | undefined>("")
  const [isEditView, setEditView] = useState<boolean>(false);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  function handleChangeView() {
    const editView: boolean = !isEditView;
    setEditView(editView);
    changeView(editView);
  }
  
  FetchInfo();
  async function FetchInfo() {
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
      const emailAddress = session.user.email;
      setEmail(emailAddress);
    }

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

  /* const handleClick = async () => {
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
  } */

  return (
      <>
        <section>
            <h1>Profil</h1>
            <section className={styles.profilesWrapper}>
              <div className={styles.profileWrapper}>
                <div className={styles.imageWrapper}>
                  <Image src={profileIcon1} alt="profile icon" />
                </div>
                <p>{placeholderFirstName || placeholderLastName == "Inget valt" ? "Inget valt" : placeholderFirstName + " " + placeholderLastName}</p>
              </div>
              <hr className={styles.hr} />
              <div className={styles.profileWrapper}>
                <div className={styles.imageWrapper}>
                  <Image src={profileIcon2} alt="profile icon" />
                </div>
                <p>{email}</p>
              </div>
              <hr className={styles.hr} />
              <div className={styles.profileWrapper}>
                <div className={styles.imageWrapper}>
                  <Image src={profileIcon3} alt="profile icon" />
                </div>
                <p>{placeholderPhoneNum}</p>
              </div>
              <hr className={styles.hr} />
            </section>
            <form className={styles.form}>
              {/* <div className={styles.inputWrapper}>
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
              <div className={`${styles.inputWrapper} ${styles.last}`}>
                  <label htmlFor="phoneNum">Telefonnnummer</label>
                  <input 
                  onChange={(e) => setPhoneNum(e.target.value)} 
                  name="phoneNum" 
                  id="phoneNum" 
                  type="tel"
                  value={phoneNum}
                  placeholder={placeholderPhoneNum}
                  />
              </div> */}
              <div>
                <div className={styles.notifInfo}>
                  <h2>Välj när och hur du vill få aviseringar</h2>
                  <p>Se till att du inte missar några erbjudanden genom att slå på aviseringar</p>
                </div>
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
                <button className={styles.editButton} onClick={handleChangeView}>Ändra</button>
            </div>
            <div className={styles.backButtonWrapper}>
                <Link href="/dashboard"><button className={styles.backButton}>Tillbaka</button></Link>
            </div>
        </section>
      </>
  )
}