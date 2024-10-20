"use client";

import { toast } from "sonner";
import { Footer } from "@/app/components";

import React from "react";
import Head from "next/head";

export default function Suggest() {
  const [message, setMessage] = React.useState("");
  const [timeout, setTimeout] = React.useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (timeout === 0) {
      const response = await fetch(`/api/suggest?&message=${message}`);

      if (response.ok) {
        toast.success("Suggestion envoyé avec succès !");
      } else {
        toast.error("Erreur dans l'envoie de la suggestion.");
      }

      setTimeout(10);

      const interval = setInterval(() => {
        setTimeout((prevTimeout) => {
          if (prevTimeout === 1) {
            clearInterval(interval);
          }

          return prevTimeout - 1;
        });
      }, 1000);
    } else {
      toast.error(`Il reste ${timeout} secondes de timeout`);
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
        <h1 className="mb-20 text-4xl font-normal">Suggérer une oeuvre ?</h1>

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

      <Footer />
    </>
  );
}
