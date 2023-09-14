"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditSubscription() {
    const [rowId, setRowId] = useState(" ");

    const router = useRouter();
    const supabase = createClientComponentClient()

    async function handleDeleteSub() {
        const { error } = await supabase
            .from("subscriptions")
            .delete()
            .eq('id', rowId)

        router.refresh();
    }

    return (
        <div>
            <form>
                <label htmlFor="rowId">Id på den rad som ska tas bort</label>
                <br />
                <input 
                    type="text"
                    id="rowId"
                    name="rowId"
                    value={rowId}
                    onChange={(e) => setRowId(e.target.value)}
                />
                <br />
                <button onClick={handleDeleteSub}>Ta bort prenumeration</button>
            </form>
            <hr />
        </div>
    );
}