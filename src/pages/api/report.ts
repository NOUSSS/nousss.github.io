import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { message, author } = req.query;

  const response = await fetch(
    "https://discord.com/api/webhooks/1216077905470296114/XMz_pdqVyvszZp3xKRA1uIZAt8iKwqfrm4BUjsijri5VeXSnaIz7Rt5yvaQK5C4-Ay4o",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "<@795267940521607198>",
        embeds: [
          {
            description: message,
            color: 0xf59b42,
            timestamp: new Date().toISOString(),
            author: {
              name: author,
              icon_url:
                "https://media.discordapp.net/attachments/1216077853838278758/1230668929337266299/Logo.png?ex=663428c1&is=6621b3c1&hm=c7859dfba42dc5d419c386bdac3fdc4aaafb3d399e5f7fcf566890bafc8bdf36&=&format=webp&quality=lossless&width=671&height=671",
            },
          },
        ],
      }),
    },
  );

  if (response.ok) res.status(200).json({ status: 200 });
  else res.status(400).json({ status: 400 });
};

export default handler;
