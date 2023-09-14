"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function DeleteUser() {
    const [deleteInit, setDeleteInit] = useState(false);

    const supabase = createClientComponentClient();

    function handleDeleteInit() {
        setDeleteInit(true);
    }

    async function handleDelete() {
        const { data: {session} } = await supabase.auth.getSession();
        console.log(session?.user.id);

        if (session) {
            
            const { data, error } = await supabase.auth.admin
                .deleteUser(session?.user.id);
    
            if (error) {
                console.log(error);
            }

            console.log(session, data);
        }

        

    }

    console.log(deleteInit);

    return (
        <div>
            {!deleteInit && <button onClick={handleDeleteInit}>Ta bort användare</button>}
            {deleteInit && (
                <>
                <h3>Är du säker? Åtgärden kan inte ångras.</h3>
                <button onClick={handleDelete}>Jag är säker</button>
                <button onClick={() => setDeleteInit(false)}>Ångra</button>
                </>
            )}
            <hr />
        </div>
    );
}