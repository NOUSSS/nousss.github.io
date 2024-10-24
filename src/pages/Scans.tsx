"use client";

import React, { useState, useEffect, useRef } from "react";

import { selectChapter } from "@/app/utils/Scans/chapters-utils";
import { getTailleChapitres } from "@/app/utils/Scans/getTailleChapitre";
import { Footer, Select, SelectDouble } from "@/app/components/";
import { getCurrentAnime, getAnime, cn } from "@/app/lib/";
import { Anime } from "@/typings/types";
import { NextChapter, PrevChapter } from "@/app/utils/Scans/chapters-manager";

import { toast } from "sonner";
import { icons } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { useScript, useAnime } from "@/app/lib/hooks/";
import { useRouter } from "next/router";
import { ItemsProps } from "@/app/components/Select";

import Head from "next/head";
import Link from "next/link";

import ClearCache from "@/app/cache/ClearCache";
import ScanData from "@/app/class/scanData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Scans = () => {
  const UpArrow = icons["ArrowUp"];

  const [anime, updateAnime] = useAnime<Anime.AnimeScansProps>({});
  const [filever, setFilever] = useState<string>();

  const [scanData, setScanData] = useState<ScanData>();
  const [script, setScript] = useState<string>();

  const placeholderRef = useRef<HTMLParagraphElement>(null);
  const placeholderRefVersion = useRef<HTMLParagraphElement>(null);

  const router = useRouter();

  const Last = icons["ChevronsUp"];
  const Next = icons["ChevronLast"];
  const Prev = icons["ChevronFirst"];

  useEffect(() => {
    router.events.on("routeChangeStart", ClearCache);

    return () => {
      router.events.off("routeChangeStart", ClearCache);
    };
  }, [router.events]);

  useEffect(() => {
    const currentAnime = getAnime(
      getCurrentAnime({
        wSaison: false,
      }),
    );

    if (!currentAnime || !currentAnime.options.SCANS_OPTIONS) {
      router.push("/");
    } else {
      const StorageScans = new ScanData(currentAnime.anime);

      setScanData(StorageScans);
      updateAnime({ anime: currentAnime });

      const filever = localStorage.getItem("filever");
      if (filever) setFilever(filever);

      setScript(currentAnime.options.SCANS_OPTIONS.SCRIPT_URL);

      const lastVersion = StorageScans.get()?.version;
      const lastMethod = StorageScans.get()?.method;

      if (lastVersion) {
        updateAnime({ version: lastVersion });
      }

      updateAnime((currentState) => ({
        ...currentState,
        method: lastMethod
          ? (lastMethod as "horizontal" | "vertical")
          : "vertical",
      }));
    }
  }, []);

  useEffect(() => {
    if (anime.anime?.options.SCANS_OPTIONS) {
      setScript(
        !anime.version
          ? anime.anime.options.SCANS_OPTIONS.SCRIPT_URL
          : anime.anime.options.SCANS_OPTIONS.SCRIPT_URL.replace(
              "/scan/",
              `/scan${anime.version.split("|")[0]}/`,
            ),
      );
    }
  }, [anime.version]);

  const status = useScript(script + `?filever=${filever}`, {
    removeOnUnmount: true,
  });

  const isLast =
    anime.anime?.anime &&
    scanData?.get()?.chapitre === anime?.chapitresOptions?.length.toString();

  const isFirst = anime.anime?.anime && scanData?.get()?.chapitre === "1";

  useEffect(() => {
    if (status === "error") {
      toast.error("Erreur dans le chargement des scans.");
    }

    if (status === "ready") {
      setTimeout(() => {
        toast.success("Les scans ont été chargés.");

        const scanOptions = anime.anime?.options.SCANS_OPTIONS;

        const from = scanOptions?.from === 0 ? scanOptions.from : 1;
        const { CHAPITRE_SPECIAUX } = scanOptions || {};

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

          const storedChapter = scanData?.get()?.chapitre;

          const indexOption = storedChapter ? Number(storedChapter) - 1 : 0;
          const option = options[indexOption];

          updateAnime((currentState) => ({
            ...currentState,
            scans: selectChapter(
              anime!,
              option,
              placeholderRef,
              !anime.version ? undefined : anime.version.split("|")[1],
            ),
          }));
        }
      }, 250);
    }
  }, [status, anime.version, script]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, anime.scans);

  const Buttons = ({ invert }: { invert: boolean }) => (
    <div
      className={cn(
        "relative mb-24 flex flex-col gap-8 after:h-px after:w-full after:bg-neutral-700",
        {
          "flex-col-reverse": invert,
          "top-12": invert,
        },
      )}
    >
      <button
        className={cn("glassBtn relative top-4", {
          "-top-2": invert,
        })}
        disabled={isLast as boolean}
        onClick={() => {
          const lastScan =
            anime?.chapitresOptions![anime?.chapitresOptions!.length - 1]!;

          updateAnime((currentState) => ({
            ...currentState,
            scans: selectChapter(
              anime!,
              lastScan,
              placeholderRef,
              !anime.version ? undefined : anime.version.split("|")[1],
            ),
          }));
        }}
      >
        Dernier chapitre <Last />
      </button>

      <div className={cn("flex justify-between gap-4", {})}>
        <button
          disabled={isFirst as boolean}
          className="glassBtn"
          onClick={() =>
            PrevChapter(
              anime!,
              updateAnime,
              placeholderRef,
              !anime.version ? undefined : anime.version.split("|")[1],
            )
          }
        >
          <Prev />
          <p className="max-[430px]:hidden">Chapitre précédent</p>
        </button>

        <button
          disabled={isLast as boolean}
          className="glassBtn"
          onClick={() =>
            NextChapter(
              anime!,
              updateAnime,
              placeholderRef,
              !anime.version ? undefined : anime.version.split("|")[1],
            )
          }
        >
          <p className="max-[430px]:hidden">Chapitre suivant</p>
          <Next />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        {anime?.anime && (
          <title>{anime?.anime.anime} - Scans | Mugiwara-no Streaming</title>
        )}

        <meta
          property="og:description"
          content="Les scans de l'anime que vous souhaitez"
        />

        {anime.anime?.options.affiche && (
          <meta
            property="twitter:card"
            content={anime.anime.options.affiche.src}
          />
        )}
      </Head>

      <main className="flex select-none flex-col items-center">
        <div className="relative">
          <script
            dangerouslySetInnerHTML={{
              __html: `aclib.runBanner({
            zoneId: '8868058',
        });`,
            }}
            type="text/javascript"
            async
          ></script>
        </div>

        <div className="fixed left-0 max-lg:hidden">
          <script
            dangerouslySetInnerHTML={{
              __html: `aclib.runBanner({
            zoneId: '8868062',
        });`,
            }}
            type="text/javascript"
            async
          ></script>
        </div>

        {anime?.anime && (
          <Link
            className="mb-12 animate-title text-5xl font-normal"
            href={{
              pathname: "/Home",
              query: { anime: anime!.anime.anime },
            }}
          >
            {anime.anime.anime}
          </Link>
        )}

        <div className="mb-12 flex flex-col">
          {anime?.method && (
            <div className="mb-4">
              <SelectDouble
                items={[
                  {
                    name: "Horizontal",
                    value: "horizontal",
                    defaultValue: anime.method === "horizontal",
                  },
                  {
                    name: "Vertical",
                    value: "vertical",
                    defaultValue: anime.method === "vertical",
                  },
                ]}
                click={(value) => {
                  updateAnime((currentState) => ({
                    ...currentState,
                    method: value as "horizontal" | "vertical",
                  }));

                  scanData?.setMethod(value);
                }}
              />
            </div>
          )}

          <div className="mb-2">
            <Select
              scroll={true}
              search
              onSelect={(items) => {
                scanData?.setChapitre(items[0].value);

                updateAnime((currentState) => ({
                  ...currentState,
                  scans: selectChapter(
                    anime!,
                    items[0],
                    placeholderRef,
                    !anime.version ? undefined : anime.version.split("|")[1],
                  ),
                }));
              }}
              items={anime?.chapitresOptions!}
              placeholder="Selectionnez un chapitre"
              placeholderRef={placeholderRef}
            />
          </div>

          {anime.anime?.options.SCANS_OPTIONS?.versions && (
            <Select
              placeholder="Changer de version"
              placeholderRef={placeholderRefVersion}
              items={[
                {
                  name: "Normal",
                  value: "return-normal",
                  disabled: anime.version ? false : true,
                },
                ...anime.anime.options.SCANS_OPTIONS.versions.map(
                  ({ value, name }) => ({
                    value,
                    name,
                    disabled: anime.version === value,
                  }),
                ),
              ]}
              onSelect={(items) => {
                ClearCache();

                if (items[0].value === "return-normal") {
                  updateAnime((currentState) => ({
                    ...currentState,
                    version: undefined,
                  }));

                  scanData?.setVersion("");
                } else {
                  updateAnime((currentState) => ({
                    ...currentState,
                    version: items[0].value,
                  }));

                  scanData?.setVersion(items[0].value);
                }
              }}
            />
          )}
        </div>

        <Buttons invert={false} />

        {anime.method === "horizontal" && (
          <p className="relative -top-8">
            Manga : droite à gauche
            <br />
            Webtoon : gauche à droite
          </p>
        )}

        <div className="relative before:absolute before:left-0 before:h-full before:w-full before:bg-transparent">
          {anime.method === "vertical" ? (
            anime?.scans
          ) : (
            <Swiper
              dir={`${anime.anime?.category.includes("Webtoon") ? "" : "rtl"}`}
              pagination={{
                clickable: true,
                type: "progressbar",
              }}
              modules={[Navigation, Pagination]}
              slidesPerView={"auto"}
            >
              {anime.scans?.map((e, i) => (
                <SwiperSlide key={i} className="mt-4 justify-center">
                  {e}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <Buttons invert />

        <div className="fixed bottom-0 right-0 z-50 m-4 cursor-pointer rounded border border-main bg-zinc-900 p-2">
          <UpArrow
            size="25px"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        <div className="relative">
          <script
            dangerouslySetInnerHTML={{
              __html: `aclib.runBanner({
            zoneId: '8868058',
        });`,
            }}
            async
            type="text/javascript"
          ></script>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Scans;
