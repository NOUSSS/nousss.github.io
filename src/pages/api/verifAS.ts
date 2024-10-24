import { NextApiRequest, NextApiResponse } from "next";
import { chromium } from "playwright";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { url } = req.query;

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(`https://${url}`);

    await page.evaluate(() => {
      document.querySelectorAll("button").forEach((e: HTMLButtonElement) => {
        if (e.innerHTML.includes("J'ACCEPTE")) e.click();
      });
    });

    const saisons = await page.evaluate(() => {
      let saisonCount = 0;

      document.querySelectorAll("a").forEach((e: HTMLAnchorElement) => {
        if (e.href.includes("saison") && !e.href.includes("hs")) saisonCount++;
      });

      return saisonCount;
    });

    const scans = await page.evaluate(() => {
      let scanCount = 0;

      document.querySelectorAll("a").forEach((e: HTMLAnchorElement) => {
        if (e.href.includes("scan")) scanCount++;
      });

      return scanCount;
    });

    await page.goto(`https://${url}/film/vostfr`);

    const films = await page.evaluate(() => {
      const select = document.querySelector(
        "#selectEpisodes",
      ) as HTMLSelectElement;

      if (select) {
        return select.options.length;
      } else {
        return 0;
      }
    });

    await browser.close();

    res.status(200).json({ saisons, films, scans });
  } catch {
    res.status(200).json({ saisons: 0, films: 0, scans: 0 });
  }
};

export default handler;
