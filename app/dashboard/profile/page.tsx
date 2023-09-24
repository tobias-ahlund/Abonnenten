// redigera profil
import Logout from "@/app/components/logout/logout"
import styles from "../page.module.css";
import EditProfile from "@/app/components/editProfile/EditProfile";

export default function Profile() {
    return (
        <>
        <h1 className={styles.h1BigTop}>Redigera profil</h1>
        <EditProfile />
        <Logout />
        </>
    )
}
