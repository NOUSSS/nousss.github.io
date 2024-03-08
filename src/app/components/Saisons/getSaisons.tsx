import { getCurrentAnime } from "@/app/lib/getCurrentAnime";
import { ANIMES } from "@/animes/constants";

import Image from "next/image";

export function getSaisons() {
  const currentAnime = getCurrentAnime({ wSaison: false });

  const options =
    ANIMES.find(
      ({ anime }) => anime.toLowerCase() === currentAnime.toLowerCase()
    )!.options || {};

  const lastEpisode =
    options.EPISODES_OPTIONS?.names?.[
      options.EPISODES_OPTIONS?.names.length - 1
    ]?.index || "?";

  const { allIndex } = options.EPISODES_OPTIONS || {};
  const { saisons } = options;

  const saisonsList = [];

  for (let i = 1; i < Object.keys(saisons!).length + 1; i++) {
    const isOAV =
      i === Object.keys(saisons!).length && options.EPISODES_OPTIONS!.oav;

    const intervalEpisodes = `${allIndex![i] + 1} - ${
      i < Object.keys(saisons!).length ? allIndex![i + 1] : lastEpisode
    }`;

    saisonsList.push({
      id: `${saisons?.[i].name}|${
        typeof saisons?.[i].aliases === "undefined"
          ? ""
          : saisons?.[i].aliases?.join(", ")
      } ${intervalEpisodes}`,
      element: (
        <>
          <Image
            className="poster-saison"
            src={saisons?.[i].image()!}
            id={String(i)}
            alt="poster de saison"
          />
          <p className="text--saisons">
            <span>{saisons?.[i].name}</span>
            <br />
            {isOAV ? "" : " (" + intervalEpisodes + ")"}
          </p>
        </>
      ),
    });
  }

  return saisonsList;
}
