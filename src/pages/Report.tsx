"use client";

import { toast } from "sonner";

import React from "react";

export default function Report() {
  const [message, setMessage] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      "https://discord.com/api/webhooks/1216077905470296114/XMz_pdqVyvszZp3xKRA1uIZAt8iKwqfrm4BUjsijri5VeXSnaIz7Rt5yvaQK5C4-Ay4o",
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
                name: author,
                icon_url:
                  "https://media.discordapp.net/attachments/1216077853838278758/1230668929337266299/Logo.png?ex=663428c1&is=6621b3c1&hm=c7859dfba42dc5d419c386bdac3fdc4aaafb3d399e5f7fcf566890bafc8bdf36&=&format=webp&quality=lossless&width=671&height=671",
              },
            },
          ],
        }),
      },
    );

    if (response.ok) {
      toast.success("Signalement envoyé avec succès !");
    } else {
      toast.error("Erreur dans l'envoie du signalement.");
    }
  };

  return (
    <main className="mx-auto w-[500px] rounded-md bg-zinc-900 bg-opacity-50 p-4 shadow-lg max-md:w-auto max-md:bg-transparent">
      <h1 className="mb-20 text-4xl">Signaler un problème</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          onChange={({ target: { value } }) => setAuthor(value)}
          required
          type="text"
          placeholder="Nom"
          className="rounded-md border border-neutral-700 bg-transparent p-2 focus:outline-none"
        />

        <textarea
          className="mb-8 h-64 rounded-md border border-neutral-700 bg-transparent p-2 focus:outline-none"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          placeholder="Signalement"
          required
        />

        <button
          className="btn border hover:border-green-500 hover:text-green-500"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}
