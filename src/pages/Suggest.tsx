"use client";

import { toast } from "sonner";
import React from "react";

export default function Suggest() {
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    if (response.ok) {
      toast.success("Suggestion envoyé avec succès !");
    } else {
      toast.error("Erreur dans l'envoie de la suggestion.");
    }
  };

  return (
    <main className="mx-auto w-[500px] rounded-md bg-zinc-900 bg-opacity-50 p-4 shadow-lg max-md:w-auto max-md:bg-transparent">
      <h1 className="mb-20 text-4xl">Suggérer un anime</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <textarea
          className="mb-8 h-64 rounded-md border border-neutral-700 bg-transparent p-2"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          placeholder="Nom de l'anime ou des animes"
          required
        />

        <button className="btn" type="submit">
          Envoyer
        </button>
      </form>
    </main>
  );
}
