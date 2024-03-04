import Image from "next/image";

import { getLecteur } from "@/app/lib/getLecteur";
import { appearVideo } from "./appearVideo";
import { getAnime } from "@/app/lib/getAnime";
import { formatName } from "@/app/lib/formatName";

export function getFilms(
  setFilmsFront: React.Dispatch<
    React.SetStateAction<React.ReactNode[] | undefined>
  >,

  setCurrentLecteur: React.Dispatch<
    React.SetStateAction<{ lecteur: string; change?: boolean } | null>
  >,

  setTitle: React.Dispatch<React.SetStateAction<React.ReactNode>>,
  setVideo: React.Dispatch<React.SetStateAction<string>>,

  currentLecteur: {
    lecteur: string;
    change?: boolean;
  },

  currentAnime: string
) {
  let LecteursFilms: string[] = [];

  const Lecteurs = getLecteur();

  const { names } = getAnime(currentAnime)!.options.FILM_OPTIONS || {};

  const filmsNodes: React.ReactNode[] = [];

  if (currentLecteur) {
    LecteursFilms =
      Lecteurs[currentLecteur.lecteur as "epsAS" | "eps1" | "eps2"]!;
  } else {
    if (Lecteurs.epsAS) {
      setCurrentLecteur({ lecteur: "epsAS" });

      LecteursFilms = Lecteurs.epsAS;
    } else {
      const lecteur = Object.keys(Lecteurs)[0] as "eps1" | "eps2" | "epsAS";

      setCurrentLecteur({ lecteur });

      LecteursFilms = Lecteurs[lecteur]!;
    }
  }

  for (let i = 0; i < Object.keys(names!).length; i++) {
    const url = LecteursFilms[i];
    const id = `${names![i].name}|${
      typeof names![i].aliases === "undefined"
        ? ""
        : names![i].aliases?.join(", ")
    }`;

    filmsNodes.push(
      <div id={id} key={id} className="list-poster">
        <Image
          className="poster"
          src={names![i].image()}
          id={`${url} ${i}`}
          onClick={() => {
            appearVideo(
              `${url} ${i}`,
              setVideo,
              setTitle,
              formatName(currentAnime)
            );
          }}
          alt="poster de saison"
        />
        <p className="text--films">{names![i].name}</p>
      </div>
    );
  }

  setFilmsFront(filmsNodes);
}
