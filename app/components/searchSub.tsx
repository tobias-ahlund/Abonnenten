"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";


export default function SearchSub() {
    const [search, setSearch] = useState<any>();
    const [searchResult, setSearchResult] = useState<any[]>();
    const supabase = createClientComponentClient()

    async function handleClick() {
        const { data, error} = await supabase
            .from(`subscription_presets`)
            .select()
            .textSearch("name", `"${search}"`, {
                type: "websearch",
            })

            if (data) {
                // console.log(data);
                
                if (data.length == 0) {
                    console.log(error);
                    setSearchResult(['Inga träffar'])
                } else {
                    data.forEach((result) => {
                        console.log(result);
                        setSearchResult([result.category_id]);
                    });
                }
                // console.log(search);
                // console.log(searchResult);
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
            <h2>Sökresultat: {searchResult} </h2>
            {searchResult?.map((result : any, index: number) => (
                    <li key={index}>
                        <span>Namn: {result.name}</span>
                        <span>{result.cost} kr/mån</span>
                    </li>
                ))}
        </>
    );
}