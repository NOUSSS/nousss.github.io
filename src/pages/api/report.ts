import type { NextApiRequest, NextApiResponse } from "next";

interface ReportRequestBody {
  message: string;
}

interface ReportResponseData {
  success: boolean;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReportResponseData>
) {
  if (req.method === "POST") {
    const { message } = req.body as ReportRequestBody;

    try {
      const discordResponse = await fetch(process.env.DISCORD_WEBHOOK_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: "Nouveau signalement",
          embeds: [
            {
              description: message,
              color: 0x04fbb7,
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });

      if (discordResponse.ok) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(500).json({ success: false });
      }
    } catch (error) {
      return res.status(500).json({ success: false, error: error as string });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
