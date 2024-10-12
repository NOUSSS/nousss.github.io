"use client";

import { toast } from "sonner";
import { ANIMES } from "@/animes/constants";
import { useState } from "react";
import { cn } from "@/app/lib";
import { Footer } from "@/app/components";

import Head from "next/head";
import Link from "next/link";

interface Error {
  manque: number;
  anime: string;
  url: string;
}

export default function Suggest() {
  const [logs, setLogs] = useState<Error[]>([]);

  return (
    <>
      <Head>
        <title>Vérifications des saisons | Mugiwara-no Streaming</title>

        <meta property="og:description" content="Vérification des saisons" />
      </Head>

      <main className="border border-neutral-700 bg-zinc-900 bg-opacity-50 p-4 sm:p-6 md:mx-24 md:rounded-md xl:mx-44">
        <h1 className="mb-6 text-4xl">Vérification des saisons</h1>

        <button
          className="btn w-full"
          onClick={async () => {
            const loading = toast.loading("Vérification en cours");

            await Promise.all(
              ANIMES.map(async ({ anime, options }) => {
                if (options.saisons && options.EPISODES_OPTIONS) {
                  let url = options.EPISODES_OPTIONS.SCRIPT_URL({
                    index: 1,
                    lang: "vostfr",
                  });

                  url = url.slice(0, url.indexOf("saison"));

                  const saisonsAS = await fetch(
                    `/api/seasonAS?url=${url.replace("https://", "")}`,
                  ).then((r) => r.json());

                  let saisonsMNS = 0;

                  const keys = Object.keys(options.saisons);
                  const values = Object.values(options.saisons);

                  for (let i = 0; i < keys.length; i++) {
                    if (!values[i].hs && keys[i].toLowerCase() !== "oav") {
                      saisonsMNS++;
                    }
                  }

                  setLogs((prevLogs) => [
                    ...prevLogs,
                    {
                      manque: saisonsAS.saisons - saisonsMNS,
                      anime,
                      url,
                    },
                  ]);
                }
              }),
            );

            toast.success("Vérification terminé", {
              id: loading,
            });
          }}
        >
          Vérifier
        </button>

        <div className="mt-12 text-left">
          <p className="text-2xl">
            Logs ({logs.length}/
            {ANIMES.filter(({ options }) => options.saisons).length}) -{" "}
            {logs.map(({ manque }) => manque > 0).length} erreur(s) trouvée(s)
          </p>

          <ul className="mt-4 flex flex-col">
            {logs?.map(({ manque, anime, url }) => (
              <li
                className={cn("flex gap-2 text-green-500", {
                  "text-red-500": manque > 0,
                })}
                key={anime}
              >
                <Link
                  target="_blank"
                  href={url}
                  className="text-xl hover:underline"
                >
                  {anime}
                </Link>
                {" - "}
                <p className="text-base">
                  {manque > 0
                    ? `Il manque ${manque} saison(s)`
                    : "Aucune nouvelle saison"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
