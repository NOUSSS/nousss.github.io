"use client";

import { toast } from "sonner";
import { ANIMES } from "@/animes/constants";
import { useState } from "react";
import { cn } from "@/app/lib";
import { Footer } from "@/app/components";

import Head from "next/head";
import Link from "next/link";

interface Log {
  manque: {
    films: number;
    seasons: number;
    scans: number;
  };
  anime: string;
  url: string;
}

export default function Suggest() {
  const [logs, setLogs] = useState<Log[]>([]);

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
              ANIMES.map(async ({ options, anime }) => {
                let url: string | undefined;

                if (options.EPISODES_OPTIONS) {
                  url = options.EPISODES_OPTIONS.SCRIPT_URL({
                    index: 1,
                    lang: "vostfr",
                  });

                  url = url.slice(0, url.indexOf("saison"));
                } else if (options.FILM_OPTIONS) {
                  url = options.FILM_OPTIONS.SCRIPT_URL("vostfr");
                  url = url.slice(0, url.indexOf("film"));
                } else if (options.SCANS_OPTIONS) {
                  url = options.SCANS_OPTIONS.SCRIPT_URL;
                  url = url.slice(0, url.indexOf("scan"));
                }

                if (url) {
                  const { saisons, films, scans } = await fetch(
                    `/api/verifAS?url=${url.replace("https://", "")}`,
                  ).then((r) => r.json());

                  let saisonsMNS = 0;

                  const filmsMNS = options.FILM_OPTIONS
                    ? Object.keys(options.FILM_OPTIONS.names).length
                    : 0;

                  const scansMNS = options.SCANS_OPTIONS
                    ? options.SCANS_OPTIONS.versions
                      ? options.SCANS_OPTIONS.versions.length + 1
                      : 1
                    : 0;

                  const keys = options.saisons
                    ? Object.keys(options.saisons)
                    : 0;

                  const values = options.saisons
                    ? Object.values(options.saisons)
                    : 0;

                  if (keys && values) {
                    for (let i = 0; i < keys.length; i++) {
                      if (!values[i].hs && keys[i].toLowerCase() !== "oav") {
                        saisonsMNS++;
                      }
                    }
                  }

                  setLogs((prevLogs) => [
                    ...prevLogs,
                    {
                      manque: {
                        seasons: saisons - saisonsMNS,
                        films: films - filmsMNS,
                        scans: scans - scansMNS,
                      },
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
            Logs ({logs.length}/{ANIMES.length}) -{" "}
            {
              logs.filter(
                ({ manque: { seasons, films, scans } }) =>
                  seasons > 0 || films > 0 || scans > 0,
              ).length
            }{" "}
            erreur(s) trouvée(s)
          </p>

          <ul className="mt-4 flex flex-col">
            {logs?.map(({ manque: { seasons, films, scans }, anime, url }) => (
              <li
                className="flex items-center gap-2 text-green-500"
                key={anime}
              >
                <Link
                  target="_blank"
                  href={url}
                  className={cn("text-lg hover:underline", {
                    "text-red-500": seasons > 0 || films > 0 || scans > 0,
                  })}
                >
                  {anime}
                  {" - "}
                </Link>
                <p
                  className={cn("text-base", {
                    "text-red-500": seasons > 0,
                  })}
                >
                  Saisons: {seasons} |{" "}
                </p>
                <p
                  className={cn("text-base", {
                    "text-red-500": films > 0,
                  })}
                >
                  Films: {films} |{" "}
                </p>
                <p
                  className={cn("text-base", {
                    "text-red-500": scans > 0,
                  })}
                >
                  Scans: {scans}
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
