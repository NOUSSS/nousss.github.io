"use client";

import React, { useState, useEffect, useRef } from "react";

import { selectChapter } from "@/app/utils/Scans/chapters-utils";
import { getTailleChapitres } from "@/app/utils/Scans/getTailleChapitre";
import { Footer, Select, SelectDouble } from "@/app/components/";
import { getCurrentAnime, getAnime, random } from "@/app/lib/";
import { Anime } from "@/typings/types";
import { NextChapter, PrevChapter } from "@/app/utils/Scans/chapters-manager";

import { toast } from "sonner";
import { icons } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { useScript, useAnime } from "@/app/lib/hooks/";
import { useRouter } from "next/router";
import { ItemsProps } from "@/app/components/Select";

import Head from "next/head";
import ClearCache from "@/app/cache/ClearCache";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Scans = () => {
  const UpArrow = icons["ArrowUp"];

  const [anime, updateAnime] = useAnime<Anime.AnimeScansProps>({});
  const [filever, setFilever] = useState<number>();
  const [loadingToast, setLoadingToast] = useState<null | string | number>(
    null,
  );

  const [script, setScript] = useState<string>();

  const placeholderRef = useRef<HTMLParagraphElement>(null);
  const placeholderRefVersion = useRef<HTMLParagraphElement>(null);

  const router = useRouter();

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
      router.push({
        pathname: "/",
      });
    } else {
      setLoadingToast(toast.loading("Les scans sont en cours de chargement"));
      updateAnime({ anime: currentAnime });
      setFilever(random());

      setScript(currentAnime.options.SCANS_OPTIONS.SCRIPT_URL);

      const lastVersion = localStorage.getItem(
        `${currentAnime.anime}--version`,
      );

      const lastMethod = localStorage.getItem(`${currentAnime.anime}--method`);

      if (lastVersion) {
        updateAnime({ version: lastVersion });
      }

      console.log(
        lastMethod ? (lastMethod as "horizontal" | "vertical") : "vertical",
      );

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
      if (anime.version === undefined) {
        setScript(anime.anime.options.SCANS_OPTIONS.SCRIPT_URL);
      } else {
        setScript(
          anime.anime.options.SCANS_OPTIONS.SCRIPT_URL.replace(
            "/scan/",
            `/scan${anime.version.split("|")[0]}/`,
          ),
        );
      }
    }
  }, [anime.version]);

  const status = useScript(script + `?filever=${filever}`, {
    removeOnUnmount: true,
  });

  const isLast =
    anime.anime?.anime &&
    localStorage.getItem(`${anime?.anime?.anime}--chapitre`) ===
      anime?.chapitresOptions?.length.toString();

  const isFirst =
    anime.anime?.anime &&
    localStorage.getItem(`${anime?.anime?.anime}--chapitre`) === "1";

  useEffect(() => {
    if (status === "error") {
      toast.error("Erreur dans le chargement des scans.", {
        id: loadingToast!,
      });
    }

    if (status === "ready") {
      setTimeout(() => {
        toast.success("Les scans ont été chargés.", {
          id: loadingToast!,
        });

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

          const storedChapter = localStorage.getItem(
            `${anime?.anime?.anime}--chapitre`,
          );

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
      }, 500);
    }
  }, [status, anime.version]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, anime.scans);

  return (
    <main className="flex select-none flex-col items-center">
      <Head>
        {anime?.anime ? (
          <title>{anime?.anime.anime} - Scans | Mugiwara-no Streaming</title>
        ) : null}
      </Head>

      {anime?.anime && (
        <h1 className="animate-title text-5xl">
          <Link
            className="font-normal"
            href={{
              pathname: "/Home",
              query: { anime: anime!.anime.anime },
            }}
          >
            {anime.anime.anime}
          </Link>
        </h1>
      )}

      <div className="relative top-12">
        <div className="mb-4">
          {anime?.method && (
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

                localStorage.setItem(`${anime.anime?.anime}--method`, value);
              }}
            />
          )}
        </div>

        <Select
          scroll={true}
          onSelect={(items) => {
            localStorage.setItem(
              `${anime?.anime?.anime}--chapitre`,
              items[0].value,
            );

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

        {anime.anime?.options.SCANS_OPTIONS?.versions ? (
          <div className="mt-2">
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

                  localStorage.removeItem(`${anime.anime?.anime}--version`);
                } else {
                  updateAnime((currentState) => ({
                    ...currentState,
                    version: items[0].value,
                  }));

                  localStorage.setItem(
                    `${anime.anime?.anime}--version`,
                    items[0].value,
                  );
                }
              }}
            />
          </div>
        ) : null}
      </div>

      <div className="relative top-24 mb-60 flex flex-col gap-4">
        <button
          className="btn next relative top-4"
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
          Dernier chapitre
        </button>

        <div className="relative top-4 flex gap-4 after:absolute after:-bottom-6 after:left-0 after:h-px after:w-full after:bg-neutral-700">
          {!isFirst ? (
            <button
              className="btn back"
              onClick={() =>
                PrevChapter(
                  anime!,
                  updateAnime,
                  placeholderRef,
                  !anime.version ? undefined : anime.version.split("|")[1],
                )
              }
            >
              Chapitre précédent
            </button>
          ) : null}

          {!isLast ? (
            <button
              className="btn next"
              onClick={() =>
                NextChapter(
                  anime!,
                  updateAnime,
                  placeholderRef,
                  !anime.version ? undefined : anime.version.split("|")[1],
                )
              }
            >
              Chapitre suivant
            </button>
          ) : null}
        </div>
      </div>

      <div className="relative -top-16 -mb-32 before:absolute before:left-0 before:h-full before:w-full before:bg-transparent">
        {anime.method === "vertical" ? (
          anime?.scans
        ) : (
          <Swiper
            slidesPerView={"auto"}
            pagination={{ type: "progressbar", clickable: true }}
            modules={[Pagination]}
          >
            {anime.scans?.map((e, i) => (
              <SwiperSlide key={i} className="mt-4 justify-center">
                {e}
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="relative top-24 mb-60 flex flex-col gap-4">
        <div className="relative top-4 flex cursor-pointer gap-4 shadow-lg after:absolute after:-bottom-6 after:left-0 after:h-px after:w-full after:bg-neutral-700">
          {!isFirst ? (
            <button
              className="btn back"
              onClick={() =>
                PrevChapter(
                  anime!,
                  updateAnime,
                  placeholderRef,
                  !anime.version ? undefined : anime.version.split("|")[1],
                )
              }
            >
              Chapitre précédent
            </button>
          ) : null}

          {!isLast ? (
            <button
              className="btn next"
              onClick={() =>
                NextChapter(
                  anime!,
                  updateAnime,
                  placeholderRef,
                  !anime.version ? undefined : anime.version.split("|")[1],
                )
              }
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
