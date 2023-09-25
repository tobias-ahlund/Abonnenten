import styles from "./support.module.css";

export default function Mandate(){
    return (
        <article className={styles.textWrapper}>
            <h1 className={styles.h1BigTop}>Fullmakt</h1>
            <h2>1. Bakgrund</h2>
            <p>
            Signerande fullmaktsgivaren (”kunden”) har registrerat sig som kund hos fullmaktstagaren Abonnenten AB (”Bolaget”) med org.nr 123456-7890, i syfte att utnyttja de tjänster som tillhandahålls av Bolaget och som innebär att Bolaget för kundens räkning inhämtar, sammanställer och bevakar information om kunden och kundens avtal hos dennes leverantör/er samt inhämtar och vidarebefordrar information om olika erbjudanden/anbud från kundens leverantör/er till kunden samt återrapportering av kundens accept eller icke-accept på erbjudanden/anbud tillbaka till leverantör/er i syfte att, om kundens svar är en accept kunden blir bunden av leverantörs/ers erbjudanden/anbud. Med leverantör/er avses juridiska personer som tillhandahåller tjänster och/eller produkter till kunden inom ramen för ett avtal, t.ex. banker, försäkringsbolag, elbolag, elnätsleverantör, mobiloperatörer, bredbandsbolag, leverantörer av nyhets-/streaming-/hushållsnära tjänster/produkter, gym, fackföreningar, intresseorganisationer, välgörenhetsorganisationer, samfund m.fl. Avtalen kan t.ex. röra ett lån, en försäkring, ett elavtal eller ett telefonabonnemang.
            </p>
            <h2>2. Fullmaktens omfattning och giltighetstid</h2>
            <p>
                För att Bolaget ska ha möjlighet att tillhandahålla Tjänsten till kunden befullmäktigar härmed kunden Bolaget, eller den Bolaget förordnar i sitt ställe, att för kundens räkning i förhållande till kundens leverantörer, självständigt och oinskränkt utföra de åtgärder som följer av punkt A-C nedan. Fullmakten innefattar behörighet att:
                <br /><br />
                A. vid var tidpunkt och på det sätt Bolaget finner lämpligt, inhämta information avseende kunden samt kundens befintliga och/eller tidigare avtal inklusive, men inte uteslutande, avtalsvillkor inklusive bilagor, från kundens leverantör/er;
                <br /><br />
                B. vid var tidpunkt och på det sätt Bolaget finner lämpligt, inhämta information avseende erbjudanden/anbud från leverantör/er riktade till kunden avseende identiska eller närliggande tjänster/produkter, samt återrapportera om dessa erbjudanden/anbud tillbaka till kunden; och
                <br /><br />
                C. vid var tidpunkt och på det sätt Bolaget finner lämpligt, återrapportera kundens accept eller icke accept på erbjudanden/anbud tillbaka till leverantör/er i syfte att, om kundens svar på erbjudande/anbud är en accept, kunden blir bunden av leverantörs/ers erbjudande/anbud.
                <br /><br />
                Information som inhämtas om kunden från leverantör/er kan komma att omfattas av EU:s nya dataskyddsförordning (Europaparlamentets och rådets förordning (EU) 2016/679 av den 27 april 2016 om skydd för fysiska personer med avseende på behandling av personuppgifter och om det fria flödet av sådana uppgifter och om upphävande av direktiv 95/46/EG (allmän dataskyddsförordning)).
                <br /><br />
                Fullmakten gäller från och med tidpunkten för kundens undertecknande av denna fullmakt och fram till dess att fullmakten har återkallats av kunden.
            </p>
        </article>
    )
}