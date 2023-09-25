import puppeteer from 'puppeteer';

export async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.bredbandsval.se/streaming/netflix');

  // Extract pricing, offers, and category information here
  const pricing = await page.$eval('#netflix-priser-2023', (element) => element.textContent);

  console.log("Pricing", { pricing });

  await browser.close();
}
