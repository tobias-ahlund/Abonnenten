import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AddSubscription from "./addSubscription";
import EditSubscription from "./editSubscription";
import DeleteSubscription from "./deleteSubscription";
import ScrapeComponent from "@/app/components/ScrapeComponent"
import { scrapeData } from "@/utils/scraper";

async function getServerSideProps() {
    // Perform scraping on the server side
    const scrapingResults = await scrapeData();
  
    // Pass the scraping results as props
    return {
      props: {
        scrapingResults,
      },
    };
}
getServerSideProps();

export default async function Subscriptions({scrapingResults} : any) {
const supabase = createServerComponentClient({ cookies })

let { data: subscriptions, error } = await supabase
    .from('subscriptions')
    .select("id,name,cost")
    
    return (
        <div>
            <hr />
            <h2>Dina prenumerationer</h2>
            <ul>
                {subscriptions?.map((subscription, index) => (
                    <li key={index}>
                        <span>Id: {subscription.id}</span>
                        <br />
                        <span>Namn: {subscription.name}</span>
                        <br />
                        <span>Kostnad: {subscription.cost} kr/mån</span>
                    </li>
                ))}
            </ul>
            <ScrapeComponent scrapingResults={{scrapingResults}}/>
            <AddSubscription />
            <EditSubscription />
            <DeleteSubscription />
        </div>
    );
}


  

/* // pages/other-page.tsx
import ScrapeComponent from '../components/ScrapeComponent';
import { scrapeData } from '../utils/scraper';

function OtherPage({ scrapingResults }) {
  return (
    <div>
      <h1>Other Page</h1>
      <ScrapeComponent scrapingResults={scrapingResults} />
    </div>
  );
}

export async function getServerSideProps() {
  // Perform scraping on the server side
  const scrapingResults = await scrapeData();

  // Pass the scraping results as props
  return {
    props: {
      scrapingResults,
    },
  };
}

export default OtherPage;
 */