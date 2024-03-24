import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { ANIMES } from "@/animes/constants";

import Image from "next/image";

export function getSaisons() {
  const currentAnime = getCurrentAnime({ wSaison: false });

  const options =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase(),
    )!.options || {};

  const { allIndex } = options.EPISODES_OPTIONS || {};
  const { saisons } = options;

  const saisonsList = [];

  for (let i = 1; i < Object.keys(saisons!).length + 1; i++) {
    const intervalEpisodes = `${allIndex![i] + 1} - ${allIndex![i + 1]}`;

    saisonsList.push({
      id: `${saisons?.[i].name}|${
        typeof saisons?.[i].aliases === "undefined"
          ? ""
          : saisons?.[i].aliases?.join(", ")
      } ${i === Object.keys(saisons!).length ? "sdfsdf" : intervalEpisodes}`,
      element: (
        <>
          <Image
            src={saisons?.[i].image()!}
            id={i.toString()}
            alt="poster de saison"
            className="h-[108px] w-[89px] duration-300 hover:rotate-12"
          />
          <p className="text-sm">
            <span>{saisons?.[i].name}</span>
            <br />
            {i === Object.keys(saisons!).length ? "" : `(${intervalEpisodes})`}
          </p>
        </>
      ),
    });
  }

  return saisonsList;
}
