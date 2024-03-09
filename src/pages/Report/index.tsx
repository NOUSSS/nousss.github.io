import "./report.scss";

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
      }
    );

    if (response.ok) {
      toast.success("Signalement envoyé avec succès !");
    } else {
      toast.error("Erreur dans l'envoie du signalement.");
    }
  };

  return (
    <>
      <div className="container--report">
        <h1>Signaler un problème</h1>

        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            placeholder="Ton site il est guez"
            required
          />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </>
  );
}
