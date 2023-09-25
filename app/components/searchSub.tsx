"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function SearchSub() {
    const [search, setSearch] = useState<any>();
    const [searchResult, setSearchResult] = useState<any>([]);
    const supabase = createClientComponentClient()

    async function handleClick() {
        const { data, error} = await supabase
            .from("subscriptions")
            .select()
            .textSearch("name", `"${search}"`, {
                type: "websearch",
            })

            if (data) {
                if (data.length == 0) {
                    setSearchResult("Inget hittat");
                } else {
                    data.forEach((result) => {
                        setSearchResult([result.name]);
                    });
                }
                console.log(search);
                console.log(searchResult);
            }
    }
    
    return (
        <>
            <label htmlFor="searchSub">Sök på abonnemang:</label>
            <input 
                type="search" 
                id="searchSub" 
                name="searchSub" 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button onClick={handleClick}>Sök</button>
            <h2>Sökord: {search}</h2>
            <h2>Sökresultat: {searchResult}</h2>
        </>
    );
}