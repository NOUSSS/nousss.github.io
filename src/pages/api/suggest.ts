import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { message } = req.query;

  const response = await fetch(
    "https://discord.com/api/webhooks/1231367526022250561/kW_dPmPKqORJkdWu4AbDV1LVrF4Cvwnt9zwyyPsW0bIGAPzfR3SmcQd_PQm65D5rXmeV",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            description: message,
            color: 0x04fbb7,
            timestamp: new Date().toISOString(),
            author: {
              name: "Suggestion",
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
