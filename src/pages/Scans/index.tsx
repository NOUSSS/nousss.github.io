"use client";

import React, { useState, useEffect } from "react";

import {
  getTailleChapitres,
  selectChapter,
} from "@/app/utils/Scans/chapterManager";

import { AnimesType } from "@/animes/constants";
import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { formatName } from "@/app/lib/formatName";
import { getAnime } from "@/app/lib/getAnime";
import { ScansOptions } from "@/typings/types";
import { NextChapter, PrevChapter } from "@/app/utils/Scans/chapterEvents";

import { toast } from "sonner";
import { icons } from "lucide-react";
import { useScript } from "usehooks-ts";
import { useRouter } from "next/router";

import Head from "next/head";
import Select, { ItemsProps } from "@/app/ui/Select";
import ClearCache from "@/app/cache/ClearCache";
import random from "@/app/lib/random";

const Scans = () => {
  const UpArrow = icons["ArrowUp"];

  const [anime, setAnime] = useState<AnimesType | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [chapitresOptions, setChapitresOptions] = useState<ItemsProps[]>([]);
  const [scans, setScans] = useState<React.ReactNode[] | undefined>([]);
  const [filever, setFilever] = useState<number>();
  const [loadingToast, setLoadingToast] = useState<null | string | number>(
    null,
  );

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", ClearCache);

    return () => {
      router.events.off("routeChangeStart", ClearCache);
    };
  }, [router.events]);

  useEffect(() => {
    setIsClient(true);

    const currentAnime = getAnime(
      getCurrentAnime({
        wSaison: false,
      }),
    );

    if (!currentAnime || !currentAnime.options.SCANS_OPTIONS) {
      router.push({
        pathname: "/",
      });
    } else {
      setLoadingToast(toast.loading("Les scans sont en cours de chargement"));
      setAnime({
        anime: formatName(currentAnime!.anime),
        options: currentAnime.options,
        category: currentAnime.category,
        synopsis: currentAnime.synopsis,
      });

      setFilever(random());
    }
  }, []);

  const options = (isClient && anime?.options?.SCANS_OPTIONS) as ScansOptions;
  const from = isClient && options?.from === 0 ? options.from : 1;

  const { CHAPITRE_SPECIAUX, SCRIPT_URL } = options || {};

  const status = useScript(SCRIPT_URL + `?filever=${filever}`, {
    removeOnUnmount: true,
  });

  const isLast =
    isClient &&
    localStorage.getItem(`${anime?.anime}--chapitre`) ===
      chapitresOptions.length.toString();

  const isFirst =
    isClient && localStorage.getItem(`${anime?.anime}--chapitre`) === "1";

  useEffect(() => {
    if (status === "error") {
      toast.error("Erreur dans le chargement des scans.", {
        id: loadingToast!,
      });
    }

    if (status === "ready") {
      toast.success("Les scans ont été chargés.", {
        id: loadingToast!,
      });

      let retard = 0;

      const options: ItemsProps[] = [];

      for (let i = 0; i < getTailleChapitres(); i++) {
        if (CHAPITRE_SPECIAUX?.includes(i)) {
          options.push({
            name: "Chapitre Special",
            value: (i + from).toString(),
          });

          retard++;
        } else {
          options.push({
            name: `Chapitre ${i + from - retard}`,
            value: (i + 1).toString(),
          });
        }
      }

      setTimeout(() => {
        if (anime) {
          setChapitresOptions(options);

          const storedChapter = localStorage.getItem(
            `${anime?.anime}--chapitre`,
          );

          const indexOption = storedChapter ? Number(storedChapter) - 1 : 0;
          const option = options[indexOption];

          setScans(selectChapter(option, anime?.anime));

          setTimeout(() => {
            const placeholder = document.querySelector(
              ".placeholder",
            ) as HTMLElement;

            if (placeholder) placeholder.innerText = option.name;
          }, 200);
        }
      }, 100);

      setTimeout(() => {
        const scrollPosition = localStorage.getItem(
          `${anime?.anime}--scrollPosition`,
        );

        if (scrollPosition) {
          window.scrollTo({
            top: +scrollPosition,
            behavior: "smooth",
          });
        }
      }, 1500);
    }
  }, [status, anime, loadingToast]);

  return (
    <main className="flex select-none flex-col items-center">
      <Head>
        {anime?.anime ? (
          <title>{anime.anime} - Scans - Mugiwara-no Streaming</title>
        ) : null}
      </Head>

      <Title
        link={{
          pathname: "/Home",
          query: { anime: anime?.anime! },
        }}
      />

      <Select
        className="top-12"
        onSelect={(item) => {
          localStorage.setItem(`${anime?.anime}--chapitre`, item.value);

          setScans(selectChapter(item, anime?.anime!));
        }}
        items={chapitresOptions}
        placeholder="Selectionnez un chapitre"
      />

      <div className="relative top-24 mb-60 flex flex-col gap-4">
        <button
          className="btn lastChapter next relative top-4"
          onClick={() => {
            const lastScan = chapitresOptions[chapitresOptions.length - 1];

            setScans(selectChapter(lastScan, anime!.anime));
          }}
        >
          Dernier chapitre
        </button>

        <div className="relative top-4 flex gap-4 after:absolute after:-bottom-6 after:left-0 after:h-[1px] after:w-full after:bg-neutral-700">
          {!isFirst ? (
            <button
              className="btn back"
              onClick={() =>
                PrevChapter(setScans, anime!.anime, chapitresOptions)
              }
            >
              Chapitre précédent
            </button>
          ) : null}

          {!isLast ? (
            <button
              className="btn next"
              onClick={() =>
                NextChapter(setScans, anime!.anime, chapitresOptions)
              }
            >
              Chapitre suivant
            </button>
          ) : null}
        </div>
      </div>

      <div className="relative -top-16 -mb-32 before:absolute before:left-0 before:h-full before:w-full before:bg-transparent">
        {scans}
      </div>

      <div className="relative top-24 mb-60 flex flex-col gap-4">
        <div className="relative top-4 flex cursor-pointer gap-4 shadow-lg after:absolute after:-bottom-6 after:left-0 after:h-[1px] after:w-full after:bg-neutral-700">
          {!isFirst ? (
            <button
              className="btn prevButton back"
              onClick={() =>
                PrevChapter(setScans, anime!.anime, chapitresOptions)
              }
            >
              Chapitre précédent
            </button>
          ) : null}

          {!isLast ? (
            <button
              className="btn nextButton next"
              onClick={() =>
                NextChapter(setScans, anime!.anime, chapitresOptions)
              }
            >
              Chapitre suivant
            </button>
          ) : null}
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-50 m-4 cursor-pointer rounded border border-main bg-[hsla(231,14%,10%,1)] p-2">
        <UpArrow
          size="25px"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      <Footer media />
    </main>
  );
};

export default Scans;
