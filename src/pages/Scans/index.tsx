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
import { useRouter } from "next/router";

import Head from "next/head";
import Select, { ItemsProps } from "@/app/ui/Select";

const Scans = () => {
  const UpArrow = icons["ArrowUp"];

  const [anime, setAnime] = useState<AnimesType | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [chapitresOptions, setChapitresOptions] = useState<ItemsProps[]>([]);
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

      const scrollUp = document.querySelector(".scrollUp") as HTMLElement;
      const target = document.querySelector(".footer");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              scrollUp.style.position = "relative";
              scrollUp.style.margin = "-50px";
            } else {
              scrollUp.style.position = "fixed";
              scrollUp.style.margin = "50px";
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      if (target) observer.observe(target);
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

      if (Number(chapitre) === chapitresOptions.length)
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

      const options: ItemsProps[] = [];

      for (let i = 0; i < getTailleChapitres(); i++) {
        if (CHAPITRE_SPECIAUX?.includes(i)) {
          options.push({
            name: "Chapitre Special",
            value: (i + Number(from)).toString(),
          });

          retard++;
        } else {
          options.push({
            name: `Chapitre ${i + Number(from) - retard}`,
            value: (i + Number(from)).toString(),
          });
        }
      }

      setTimeout(() => {
        setChapitresOptions(options);
        clickEvents(setScans, formatName(anime!.anime!), options);

        setScans(
          selectChapter(
            options[
              Number(
                localStorage.getItem(
                  `${formatName(anime!.anime!)}--chapitre`
                ) ?? 1
              ) - 1
            ],
            formatName(anime!.anime!),
            options
          )
        );
      }, 100);
    }
  }, [status, anime, loadingToast]);

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
          {chapitresOptions.length > 0 ? (
            <Select
              onSelect={(item) => {
                localStorage.setItem(
                  `${formatName(anime!.anime!)}--chapitre`,
                  item.value
                );

                setScans(
                  selectChapter(
                    item,

                    formatName(anime!.anime!),
                    chapitresOptions
                  )
                );
              }}
              items={chapitresOptions}
              placeholder="Selectionnez un chapitre"
            />
          ) : null}
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

        <div className="scrollUp">
          <UpArrow
            size="50px"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        <Footer media />
      </div>
    </>
  );
};

export default Scans;
