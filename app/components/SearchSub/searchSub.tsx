"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Search from "app/public/images/Search.svg";
import { useRouter } from "next/navigation";

const supabase = createClientComponentClient()

export default function SearchSub() {
    const [search, setSearch] = useState<any>("");
    const [searchResult, setSearchResult] = useState<any>([]);
    const [secondSearchResult, setSecondSearchResult] = useState<any>([]);

    async function handleSubmit(e: any) {
        setSearchResult([]);
        setSecondSearchResult([]);

        e.preventDefault();

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
                        setSearchResult((prevData: any) => [...prevData, [result.name, result.cost, result.id]]);
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

    async function addSubPreset(subPresetInfo: string[]) {
        /* const router = useRouter(); */
        const { data: {session} } = await supabase.auth.getSession();
        
        if (session) {
            const { data, error } = await supabase
            .from("subscriptions")
            .insert([
                { 
                    user_id: session?.user?.id,
                    name: subPresetInfo[0], 
                    cost: subPresetInfo[1],
                    subscription_preset_id: subPresetInfo[2],
                },
            ])

            if (error) {
                console.log(error);
            }

            if (data) {
                console.log(data);
            }

            /* setSearchResult([]);
            setSecondSearchResult([]); */
            /* router.refresh(); */
        }
    }

    return (
        <>
            <form 
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <div className={styles.inputWrapper}>
                    <label htmlFor="searchSub">Sök</label>
                    <input 
                        type="search" 
                        id="searchSub" 
                        name="searchSub" 
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        placeholder="Sök på abonnemang"
                    />
                    <div className={styles.search}>
                        <Image onClick={handleSubmit} src={Search} alt="search icon" />
                    </div>
                </div>
            </form>
            <h2>Sökord: {search}</h2>
            <h2>Sökresultat:</h2>
            <ul>
                {searchResult?.map((result : any, index: number) => (
                    <li key={index}>
                        <p>Namn: {result[0]}</p>
                        <p>{result[1]} kr/mån</p>
                        <button onClick={() => addSubPreset(result)}>Lägg till</button>
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