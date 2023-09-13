"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function EditSubscription() {
    const router = useRouter();

    const supabase = createClientComponentClient()

    async function handleEditSub() {
        const { error } = await supabase
            .from("subscriptions")
            // Värdet uppdateras till "iCloud", där kolumnens namn = "name" och där radens id = 1 
            .update({ name: "iCloud" })
            .eq("id", 1)
        
        if (error) {
            console.log(error);
        }
        
        router.refresh();
    }

    return (
        <div>
            <button onClick={handleEditSub}>Ändra abonnemangsinfo</button>
        </div>
    );
}