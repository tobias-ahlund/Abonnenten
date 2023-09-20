// terms of service 
// footer om inloggad annars bara header i layout. 
// lista som innehåller länkar till: Allmänna vilkor, integritetspolicy och fullmakt.

import Mandate from "../components/support/mandate";
import Terms from "../components/support/terms";
import Integrity from "../components/support/integrity";

// Prop för att visa vilken undersida som är öppnad?
export default async function Support() {

    return (
    <>
    <h1>Support</h1>
    <ul>
        <li>
            <Mandate onClick={}/>
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