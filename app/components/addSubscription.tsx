"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddSubscription() {
    const [subName, setSubName] = useState(" ");
    const [cost, setCost] = useState(" ");

    const router = useRouter();

    const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClientComponentClient()

    async function handleAddSub() {
        const { data: {session} } = await supabase.auth.getSession();
        console.log(session?.user.id);
        
        if (session) {
            const { data, error } = await supabase
            .from("subscriptions")
            .insert([
                { 
                    user_id: session?.user?.id,
                    name: subName, 
                    cost: cost,
                },
            ])

            if (error) {
                console.log(error);
            }

            if (data) {
                console.log(data);
            }
            router.refresh();
        }
    }

    return (
        <div>
            <hr />
            <h2>Lägg till prenumeration</h2>
            <label htmlFor="subName">Namn</label>
            <input 
                id="subName" 
                type="text"
                name="subName"
                value={subName}
                onChange={(e) => setSubName(e.target.value)}
            />
            <br />
            <label htmlFor="cost">Kostnad</label>
            <input 
                id="cost" 
                type="text"
                name="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
            />
            <br />
            <button onClick={handleAddSub}>Lägg till</button>
        </div>
    );
}