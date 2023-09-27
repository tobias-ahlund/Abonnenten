import Logout from "@/app/components/logout/logout"
import Subscriptions from "@/app/components/subscriptions"
import SearchSub from "@/app/components/SearchSub/searchSub"

export default function Profile() {
    return (
    <>
    <h1>Sök abonnemang</h1>
    <SearchSub />
    <Subscriptions/>
    </>
    )
}
