// components/ScrapeComponent.tsx
import { scrapeData } from "@/utils/scraper";

function ScrapeComponent({ scrapingResults }: any) {
  return (
    <div>
      <p>Scraping data...</p>
      <pre>{JSON.stringify(scrapingResults, null, 2)}</pre>
    </div>
  );
}

export default ScrapeComponent;
