"use client"

import { createClient } from '@supabase/supabase-js'
import { useState } from "react";

export default function AddSubscription() {
    const [subName, setSubName] = useState(" ");
    const [cost, setCost] = useState(" ");

    const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabase_url, supabase_anon_key)

    async function handleAddSub() {
        const { data: { user } } = await supabase.auth.getUser();

        const { data, error } = await supabase
        .from("subscriptions")
        .insert([
            { 
                /* user_id: user?.id, */
                name: subName, 
                cost: cost 
            },
        ])

        if (error) {
            console.log(error);
        }

        if (data) {
            console.log(data);
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