"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function SearchSub() {
    const [search, setSearch] = useState<any>();
    const [searchResult, setSearchResult] = useState<any>([]);
    const [secondSearchResult, setSecondSearchResult] = useState<any>([]);

    const supabase = createClientComponentClient()

    async function handleClick() {
        const { data, error} = await supabase
            .from(`subscription_presets`)
            .select()
            .textSearch("name", `"${search}"`, {
                type: "websearch",
            })

            if (data) {
                if (data.length == 0) {
                    setSearchResult([])
                } else {
                    data.map((result) => {
                        setSearchResult((prevData: any) => [...prevData, [result.name, result.cost]]);
                    });
                }
            }

        const { data: results } = await supabase
            .from("subscriptions")
            .select()
            .textSearch("name", `"${search}"`, {
                type: "websearch",
        })

        if (results) {
            if (results.length == 0) {
                setSecondSearchResult([])
            } else {
                results.map((result) => {
                    setSecondSearchResult((prevResult: any) => [...prevResult, [result.name, result.cost]]);
                });
            }
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
            <h2>Sökresultat:</h2>
            <ul>
                {searchResult?.map((result : any, index: number) => (
                    <li key={index}>
                        <p>Namn: {result[0]}</p>
                        <p>{result[1]} kr/mån</p>
                    </li>
                ))}
            </ul>
            <ul>
                {secondSearchResult?.map((result: any, index: number) => (
                    <li key={index}>
                        <p>Namn: {result[0]}</p>
                        <p>{result[1]} kr/mån</p>
                    </li>
                ))}
            </ul>
        </>
    );
}