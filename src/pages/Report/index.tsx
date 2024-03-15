import { toast } from "sonner";
import React from "react";

export default function Report() {
  const [message, setMessage] = React.useState("");

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
          content: "Nouveau signalement",
          embeds: [
            {
              description: message,
              color: 0x04fbb7,
              timestamp: new Date().toISOString(),
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
    <main className="mx-auto w-[500px] rounded-md bg-[#17171c7a] p-4 shadow-lg max-md:w-auto max-md:bg-transparent">
      <h1 className="mb-20 text-4xl">Signaler un problème</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          className="mb-16 h-64 w-full border border-[--grey] bg-transparent p-2 focus:outline-none"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          placeholder="Ton site il est guez"
          required
        />

        <button
          className="btn w-full border hover:border-green-500 hover:text-green-500"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}
