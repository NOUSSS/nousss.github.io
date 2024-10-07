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

    await browser.close();

    res.status(200).json({ saisons });
  } catch {
    res.status(200).json({ saisons: 0 });
  }
};

export default handler;
