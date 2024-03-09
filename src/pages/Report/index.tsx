import "./report.scss";

import React from "react";
import { toast } from "sonner";

export default function Report() {
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

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
