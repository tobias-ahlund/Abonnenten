"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditSubscription() {
    const [subName, setSubName] = useState(" ");
    const [rowId, setRowId] = useState(" ");
    const [cost, setCost] = useState(" ");

    const router = useRouter();
    const supabase = createClientComponentClient()

    async function handleEditSub() {
        const { error } = await supabase
            .from("subscriptions")
            .update({ name: subName, cost: cost })
            .eq("id", rowId)
        
        if (error) {
            console.log(error);
        }
        
        router.refresh();
    }

    return (
        <div>
            <hr />
            <h2>Ändra abonnemangsinfo</h2>
            <form>
                <label htmlFor="rowId">Id på rad som ska ändras</label>
                <input
                    type="text"
                    id="rowId" 
                    name="rowId"
                    value={rowId}
                    onChange={(e) => setRowId(e.target.value)}
                />
                <br />
                <label htmlFor="subName">Nytt namn på abonnemang</label>
                <input
                    type="text"
                    id="subName" 
                    name="subName"
                    value={subName}
                    onChange={(e) => setSubName(e.target.value)}
                />
                <br />
                <label htmlFor="cost">Nytt pris på abonnemang</label>
                <input
                    type="text"
                    id="cost" 
                    name="cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
                <br />
                <button onClick={handleEditSub}>Ändra abonnemangsinfo</button>
            </form>
            <hr />
        </div>
    );
}