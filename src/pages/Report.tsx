"use client";

import { toast } from "sonner";
import { Footer } from "@/app/components";

import React from "react";
import Head from "next/head";

export default function Report() {
  const [message, setMessage] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      `/api/webhook?author=${author}&message=${message}`,
    );

    if (response.ok) {
      toast.success("Signalement envoyé avec succès !");
    } else {
      toast.error("Erreur dans l'envoie du signalement.");
    }
  };

  return (
    <>
      <Head>
        <title>Signalement | Mugiwara-no Streaming</title>

        <meta
          property="og:description"
          content="Page de signalement, si vous trouvez un problème"
        />
      </Head>

      <main className="mx-auto w-[500px] rounded-md bg-zinc-900 bg-opacity-50 p-4 shadow-lg max-md:w-auto max-md:bg-transparent">
        <h1 className="mb-20 text-4xl font-normal">Signaler un problème ?</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            onChange={({ target: { value } }) => setAuthor(value)}
            required
            type="text"
            placeholder="Nom"
            className="rounded-md border border-neutral-700 bg-transparent p-2"
          />

          <textarea
            className="mb-8 h-64 rounded-md border border-neutral-700 bg-transparent p-2"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            placeholder="Signalement"
            required
          />

          <button className="btn" type="submit">
            Envoyer
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}
