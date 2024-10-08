"use client";

import { toast } from "sonner";
import { ANIMES } from "@/animes/constants";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Options } from "@/typings/types";

interface Error {
  manque: number;
  anime: string;
  url: string;
}

export default function Suggest() {
  const [errors, setErrors] = useState<Error[]>([]);
  const [ended, setEnded] = useState(false);

  return (
    <>
      <Head>
        <title>Vérifications des saisons | Mugiwara-no Streaming</title>

        <meta property="og:description" content="Vérification des saisons" />
      </Head>

      <main className="mx-auto w-[500px] rounded-md bg-zinc-900 bg-opacity-50 p-4 shadow-lg max-md:w-auto max-md:bg-transparent">
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

                  if (saisonsAS.saisons > saisonsMNS) {
                    setErrors((prevErrors) => [
                      ...prevErrors,
                      {
                        manque: saisonsAS.saisons - saisonsMNS,
                        anime,
                        url,
                      },
                    ]);
                  }
                }
              }),
            );

            toast.success("Vérification terminé", {
              id: loading,
            });

            setEnded(true);
          }}
        >
          Vérifier
        </button>

        <div className="mt-12 text-left">
          <p className="text-4xl">Logs</p>

          <ul className="mt-4 flex flex-col">
            {errors.length > 0
              ? errors?.map(({ manque, anime, url }) => (
                  <li className="flex gap-2" key={anime}>
                    <Link
                      target="_blank"
                      href={url}
                      className="text-xl text-main hover:underline"
                    >
                      {anime}
                    </Link>
                    {" - "}
                    <p className="text-lg">Il manque {manque} saison(s)</p>
                  </li>
                ))
              : ended
                ? "Aucune nouvelle saison trouvée"
                : ""}
          </ul>
        </div>
      </main>
    </>
  );
}
