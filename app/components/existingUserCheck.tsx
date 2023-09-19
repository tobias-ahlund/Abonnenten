// Login compotent that is imported in app/page.tsx 

"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { text } from "stream/consumers";
import { cookies } from "next/headers";

// interface LoginProps {
//   signedIn: boolean;
// }



export default function ExistingUserCheck() {
    const [personalNumber, setPersonalNumber] = useState(" ");
    const supabase = createClientComponentClient();

    // let { data: personal_numbers, error } = await supabase
    // .from("personal_numbers")
    // .select("personal_number,user_id")
    // .eq('personal_number', personalNumber)


  return (
      <div>
            <form>
              <label htmlFor="personal_number">Personnummer</label>
              <input 
                onChange={(e) => setPersonalNumber(e.target.value)} 
                name="personal_number" 
                id="personal_number" 
                type="personal_number"
              />
            </form>
          <button onClick={(e:any) => setPersonalNumber(personalNumber)}>Logga in</button>

          {/* <ul>
          {personal_numbers?.map((personal_number, index) => (
            <li key={index}>
                <span>Id: {personal_number.user_id}</span>
                <br />
                <span>Number: {personal_number.personal_number}</span>
            </li>))}
          </ul> */}
      </div>
  )
}