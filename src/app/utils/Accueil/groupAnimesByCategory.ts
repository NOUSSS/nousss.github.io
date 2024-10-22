import seedrandom from "seedrandom";

interface AnimeOption {
  anime: string;
  category: string[];
}

export interface GroupedAnimes {
  names: string[];
  category: string;
}

const rng = seedrandom("fix");

export const groupAnimesByCategory = (
  animes: AnimeOption[],
  length: boolean,
): GroupedAnimes[] => {
  const grouped: { [key: string]: string[] } = {};

  animes.forEach(({ anime, category }) => {
    category.forEach((category) => {
      if (!grouped[category]) grouped[category] = [];

      if (!grouped[category].includes(anime)) {
        if (
          (length &&
            (category === "Nouvelles saisons" ||
              grouped[category].length < 10)) ||
          !length
        )
          grouped[category].push(anime);
      }
    });
  });

  for (const category in grouped) {
    grouped[category].sort(() => rng() - 0.5);
  }

  return Object.keys(grouped).map((category) => ({
    names: grouped[category],
    category: category,
  }));
};
