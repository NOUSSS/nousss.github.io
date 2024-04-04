"use client";

import React, { useState, useEffect, useRef } from "react";

import {
  getTailleChapitres,
  selectChapter,
} from "@/app/utils/Scans/chapterManager";

import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { getAnime } from "@/app/lib/getAnime";
import { AnimeScansProps, ScansOptions } from "@/typings/types";
import { NextChapter, PrevChapter } from "@/app/utils/Scans/chapterEvents";

import { toast } from "sonner";
import { icons } from "lucide-react";
import { useScript } from "usehooks-ts";
import { useRouter } from "next/router";

import Head from "next/head";
import Select, { ItemsProps } from "@/app/ui/Select";
import ClearCache from "@/app/cache/ClearCache";
import random from "@/app/lib/random";
import ColorPicker from "@/app/ui/colorPicker";
import useAnime from "@/app/lib/components/useAnime";

const Scans = () => {
  const UpArrow = icons["ArrowUp"];

  const [anime, updateAnime] = useAnime<AnimeScansProps>({});
  const [isClient, setIsClient] = useState(false);
  const [filever, setFilever] = useState<number>();
  const [loadingToast, setLoadingToast] = useState<null | string | number>(
    null,
  );

  const placeholderRef = useRef<HTMLParagraphElement | null>(null);

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
      updateAnime({ anime: currentAnime });
      setFilever(random());
    }
  }, []);

  const options = (isClient &&
    anime?.anime?.options?.SCANS_OPTIONS) as ScansOptions;

  const from = isClient && options?.from === 0 ? options.from : 1;

  const { CHAPITRE_SPECIAUX, SCRIPT_URL } = options || {};

  const status = useScript(SCRIPT_URL + `?filever=${filever}`, {
    removeOnUnmount: true,
  });

  const isLast =
    isClient &&
    localStorage.getItem(`${anime?.anime?.anime}--chapitre`) ===
      anime?.chapitresOptions?.length.toString();

  const isFirst =
    isClient &&
    localStorage.getItem(`${anime?.anime?.anime}--chapitre`) === "1";

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

      if (anime) {
        updateAnime((currentState) => ({
          ...currentState,
          chapitresOptions: options,
        }));

        const storedChapter = localStorage.getItem(
          `${anime?.anime?.anime}--chapitre`,
        );

        const indexOption = storedChapter ? Number(storedChapter) - 1 : 0;
        const option = options[indexOption];

        updateAnime((currentState) => ({
          ...currentState,
          scans: selectChapter(anime!, option, placeholderRef),
        }));

        setTimeout(() => {
          if (placeholderRef.current)
            placeholderRef.current.innerText = option.name;
        }, 200);
      }

      setTimeout(() => {
        const scrollPosition = localStorage.getItem(
          `${anime?.anime?.anime}--scrollPosition`,
        );

        if (scrollPosition) {
          window.scrollTo({
            top: +scrollPosition,
            behavior: "smooth",
          });
        }
      }, 1500);
    }
  }, [status, loadingToast]);

  return (
    <main className="flex select-none flex-col items-center">
      <Head>
        {anime?.anime ? (
          <title>{anime?.anime.anime} - Scans - Mugiwara-no Streaming</title>
        ) : null}
      </Head>

      <ColorPicker />

      <Title
        link={{
          pathname: "/Home",
          query: { anime: anime?.anime?.anime! },
        }}
      />

      <Select
        className="top-12"
        onSelect={(item) => {
          localStorage.setItem(`${anime?.anime?.anime}--chapitre`, item.value);

          updateAnime((currentState) => ({
            ...currentState,
            scans: selectChapter(anime!, item, placeholderRef),
          }));
        }}
        items={anime?.chapitresOptions!}
        placeholder="Selectionnez un chapitre"
        placeholderRef={placeholderRef}
      />

      <div className="relative top-24 mb-60 flex flex-col gap-4">
        <button
          className="btn next relative top-4"
          onClick={() => {
            const lastScan =
              anime?.chapitresOptions![anime?.chapitresOptions!.length - 1]!;

            updateAnime((currentState) => ({
              ...currentState,
              scans: selectChapter(anime!, lastScan, placeholderRef),
            }));
          }}
        >
          Dernier chapitre
        </button>

        <div className="relative top-4 flex gap-4 after:absolute after:-bottom-6 after:left-0 after:h-px after:w-full after:bg-neutral-700">
          {!isFirst ? (
            <button
              className="btn back"
              onClick={() => PrevChapter(anime!, updateAnime, placeholderRef)}
            >
              Chapitre précédent
            </button>
          ) : null}

          {!isLast ? (
            <button
              className="btn next"
              onClick={() => NextChapter(anime!, updateAnime, placeholderRef)}
            >
              Chapitre suivant
            </button>
          ) : null}
        </div>
      </div>

      <div className="relative -top-16 -mb-32 before:absolute before:left-0 before:h-full before:w-full before:bg-transparent">
        {anime?.scans}
      </div>

      <div className="relative top-24 mb-60 flex flex-col gap-4">
        <div className="relative top-4 flex cursor-pointer gap-4 shadow-lg after:absolute after:-bottom-6 after:left-0 after:h-px after:w-full after:bg-neutral-700">
          {!isFirst ? (
            <button
              className="btn back"
              onClick={() => PrevChapter(anime!, updateAnime, placeholderRef)}
            >
              Chapitre précédent
            </button>
          ) : null}

          {!isLast ? (
            <button
              className="btn next"
              onClick={() => NextChapter(anime!, updateAnime, placeholderRef)}
            >
              Chapitre suivant
            </button>
          ) : null}
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-50 m-4 cursor-pointer rounded border border-main bg-zinc-900 p-2">
        <UpArrow
          size="25px"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>

      <Footer style={true} media />
    </main>
  );
};

export default Scans;
