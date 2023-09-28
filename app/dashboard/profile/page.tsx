// redigera profil
import dynamic from "next/dynamic";
import Logout from "@/app/components/logout/logout"
import styles from "../page.module.css";
import EditProfile from "@/app/components/editProfile/EditProfile";

const Notifications = dynamic(() => import('@/app/components/notifications'), {
    ssr: false,
})

export default function Profile() {
    return (
        <>
        <h1 className={styles.h1BigTop}>Redigera profil</h1>
        <Notifications/>
        <EditProfile />
        <Logout />
        </>
    )
}
