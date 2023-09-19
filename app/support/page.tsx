// terms of service 
// footer om inloggad annars bara header i layout. 
// lista som innehåller länkar till: Allmänna vilkor, integritetspolicy och fullmakt.

import { allmannaVilkor, integritetsPolicy, fullmakt } from "../components/support";


// Prop för att visa vilken undersida som är öppnad?
export default async function Support() {
    
    const supportList = [allmannaVilkor, integritetsPolicy, fullmakt];

    return (
    <>
    <h1>Support</h1>
    <ul>
        {/* {
            supportList?.map((support:any, index) => (
                <li key={index}>
                    <span>{support}</span>
                </li>
        ))} */}
    </ul>
    </>
    
    )
}