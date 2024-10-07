"use client";

import { toast } from "sonner";
import { Footer } from "@/app/components";

import React from "react";
import Head from "next/head";

export default function Suggest() {
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      `/api/webhook?author=Suggestion&message=${message}`,
    );

    if (response.ok) {
      toast.success("Suggestion envoyé avec succès !");
    } else {
      toast.error("Erreur dans l'envoie de la suggestion.");
    }
  };

  return (
    <>
      <Head>
        <title>Suggestion | Mugiwara-no Streaming</title>

        <meta
          property="og:description"
          content="Page de suggestion, si vous voulez que j'ajoute un anime"
        />
      </Head>

      <main className="mx-auto w-[500px] rounded-md bg-zinc-900 bg-opacity-50 p-4 shadow-lg max-md:w-auto max-md:bg-transparent">
        <h1 className="mb-20 text-4xl">Suggérer une oeuvre</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <textarea
            className="mb-8 h-64 rounded-md border border-neutral-700 bg-transparent p-2"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            placeholder="Suggestion"
            required
          />

          <button className="btn" type="submit">
            Envoyer
          </button>
        </form>
      </main>

      <div className="fixed bottom-0 w-full">
        <Footer style={true} />
      </div>
    </>
  );
}
