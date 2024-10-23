import { Data, Historique } from "@/typings/types";

interface Query {
  [key: string]: string;
}

const goToAnime = (
  animeName: string,
  i: number,
  historiques: Historique[],
): {
  pathname: string;
  query: Query;
} => {
  const redirect = historiques[i]?.redirect;
  const detail = historiques[i]?.detail;

  if (redirect === "Episodes") {
    return {
      pathname: "/Episodes",
      query: {
        anime: animeName,
        saison: (detail as Data.EpisodesData).saison,
      },
    };
  } else if (redirect === "Scans" || redirect === "Films") {
    return {
      pathname: "/" + redirect,
      query: { anime: animeName },
    };
  }

  return {
    pathname: "/Home",
    query: { anime: animeName },
  };
};

export default goToAnime;
