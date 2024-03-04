"use client";

import "./scans.scss";
import "./responsive.scss";

import React, { useState, useEffect } from "react";

import {
  getTailleChapitres,
  selectChapter,
} from "../../app/components/Scans/chapterManager";
import { AnimesType } from "../../animes/constants";
import { Footer } from "@/app/ui/Footer";
import { Title } from "@/app/ui/Title";
import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { clickEvents } from "../../app/components/Scans/eventHandler";
import { icons } from "lucide-react";
import { formatName } from "@/app/lib/formatName";
import { getAnime } from "@/app/lib/getAnime";
import { ScansOptions } from "@/typings/types";
import { toast } from "sonner";
import { useScript } from "usehooks-ts";

import Head from "next/head";
import { useRouter } from "next/router";

const Scans = () => {
  const UpArrow = icons["ArrowUp"];

  const [anime, setAnime] = useState<AnimesType | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [chapitresOptions, setChapitresOptions] = useState<string[]>([]);
  const [scans, setScans] = useState<React.ReactNode[] | undefined>([]);
  const [loadingToast, setLoadingToast] = useState<null | string | number>(
    null
  );

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);

    const currentAnime = getAnime(
      getCurrentAnime({
        wSaison: false,
      })
    );

    if (!currentAnime || !currentAnime.options.SCANS_OPTIONS) {
      router.push({
        pathname: "/",
      });
    } else {
      setLoadingToast(toast.loading("Les scans sont en cours de chargement"));
      setAnime(currentAnime);
    }
  }, []);

  useEffect(() => {
    if (anime) {
      const chapitre =
        localStorage.getItem(`${formatName(anime.anime)}--chapitre`) ?? "1";

      const NextchapitreSelector =
        document.querySelectorAll<HTMLElement>(".nextButton")!;

      const PrevchapitreSelector =
        document.querySelectorAll<HTMLElement>(".prevButton")!;

      if (!chapitre || chapitre === "1")
        PrevchapitreSelector.forEach((e) => e.classList.add("invisible"));
      else PrevchapitreSelector.forEach((e) => e.classList.remove("invisible"));

      if (Number(chapitre) === document.querySelector("select")?.options.length)
        NextchapitreSelector.forEach((e) => e.classList.add("invisible"));
      else NextchapitreSelector.forEach((e) => e.classList.remove("invisible"));
    }
  }, [scans, anime]);

  const options = (isClient && anime?.options?.SCANS_OPTIONS) as ScansOptions;
  const from = isClient && options?.from === 0 ? options.from : 1;

  const { CHAPITRE_SPECIAUX, SCRIPT_URL } = options || {};

  const status = useScript(SCRIPT_URL, {
    removeOnUnmount: true,
  });

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

      const options: string[] = [];

      for (let i = 0; i < getTailleChapitres(); i++) {
        if (CHAPITRE_SPECIAUX?.includes(i)) {
          options.push(`Chapitre Special`);

          retard++;
        } else {
          options.push(`Chapitre ${i + Number(from) - retard}`);
        }
      }

      setChapitresOptions(options);
      clickEvents(setScans, anime!.anime!);

      setTimeout(() => {
        setScans(
          selectChapter(
            localStorage.getItem(`${formatName(anime!.anime!)}--chapitre`) ?? 1,
            formatName(anime!.anime!)
          )
        );
      }, 1000);
    }
  }, [status, CHAPITRE_SPECIAUX, anime, from, loadingToast]);

  return (
    <>
      <Head>
        {anime?.anime ? (
          <title>
            {formatName(anime.anime)} - Scans - Mugiwara-no Streaming
          </title>
        ) : null}
      </Head>

      <div className="container--scans">
        <Title
          link={{
            pathname: "/Home",
            query: { anime: anime?.anime! },
          }}
        />

        <div className="select-container">
          <select
            name="chapitres"
            className="chapitres"
            onChange={(event) => {
              const id = event.target.selectedOptions[0].id;
              const chapterId = id.match(/[0-9]/g)!.join("");

              localStorage.setItem(
                `${formatName(anime!.anime!)}--chapitre`,
                chapterId
              );

              setScans(selectChapter(chapterId, formatName(anime!.anime!)));
            }}
          >
            {chapitresOptions.map((option, index) => (
              <option key={index} id={`Chapitre ${index + 1}`}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="container--buttons--scans">
          <button className="lastChapter">Dernier chapitre</button>

          <div className="buttons--scans">
            <button className="prevButton">Chapitre précédent</button>
            <button className="nextButton">Chapitre suivant</button>
          </div>
        </div>

        <div className="scans">{scans}</div>

        <div className="container--buttons--scans">
          <div className="buttons--scans">
            <button className="prevButton">Chapitre précédent</button>
            <button className="nextButton">Chapitre suivant</button>
          </div>
        </div>

        <UpArrow
          size="50px"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        <Footer media />
      </div>
    </>
  );
};

export default Scans;
