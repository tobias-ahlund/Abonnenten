import Mandate from "../components/support/mandate";
import Terms from "../components/support/terms";
import Integrity from "../components/support/integrity";

export default async function Support() {

    return (
    <>
    <h1>Support</h1>
    <ul>
        <li>
            <Mandate/>
        </li>
        <li>
            <Terms/>
        </li>
        <li>
            <Integrity/>
        </li>
    </ul>
    </>
    
    )
}