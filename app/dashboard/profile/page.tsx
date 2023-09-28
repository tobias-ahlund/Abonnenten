"use client"

import Logout from "@/app/components/logout/logout";
import EditProfile from "@/app/components/editProfile/EditProfile";
import styles from "./styles.module.css";
import ProfileInfo from "@/app/components/profileInfo/ProfileInfo";
import { useState, useEffect } from "react";


export default function Profile() {
    const [isEditView, setEditView] = useState<boolean>(false);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    function handleChangeView(value: boolean) {
        setEditView(value)
    }

    return (
        <>
            {!isEditView && <ProfileInfo changeView={handleChangeView} />}
            {isEditView && <EditProfile changeView={handleChangeView}/>}
        </>
    )
}
