import { ANIMES } from '../animes/constants';

export const fetchAnime = (animeName: string) =>
  ANIMES.find(({ anime }) => anime.toLowerCase() === animeName.toLowerCase());
