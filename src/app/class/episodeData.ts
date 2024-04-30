import { Data } from "@/typings/types";

class EpisodeData {
  public anime: string | undefined;

  constructor(anime: string | undefined) {
    this.anime = anime;
  }

  private getEpisodesData(): Data.EpisodesData[] | null {
    const episodes = localStorage.getItem("episodes");
    if (!episodes) return null;

    try {
      return JSON.parse(episodes) as Data.EpisodesData[];
    } catch (error) {
      console.error("Error dans le storage des episodes:", error);
      return null;
    }
  }

  private saveEpisodesData(episodesData: Data.EpisodesData[]): void {
    localStorage.setItem("episodes", JSON.stringify(episodesData));
  }

  private updateAnimeData(
    updateFn: (animeData: Data.EpisodesData) => void,
  ): void {
    if (!this.anime) return;

    let episodesData = this.getEpisodesData() || [];
    let animeData = episodesData.find(({ name }) => name === this.anime);

    if (!animeData) {
      animeData = {
        name: this.anime,
        episode: "",
        saison: "",
        lang: "",
        lecteur: "",
      };
      episodesData.push(animeData);
    }

    updateFn(animeData);
    this.saveEpisodesData(episodesData);
  }

  get(): undefined | Data.EpisodesData {
    const episodesData = this.getEpisodesData();
    return episodesData?.find(({ name }) => name === this.anime);
  }

  setEpisode(newEpisode: string) {
    this.updateAnimeData((animeData) => (animeData.episode = newEpisode));
  }

  setSaison(newSaison: string) {
    this.updateAnimeData((animeData) => (animeData.saison = newSaison));
  }

  setLang(newLang: string) {
    this.updateAnimeData((animeData) => (animeData.lang = newLang));
  }

  setLecteur(newLecteur: string) {
    this.updateAnimeData((animeData) => (animeData.lecteur = newLecteur));
  }

  removeAnime(): void {
    let episodesData = this.getEpisodesData();
    if (!episodesData) return;

    episodesData = episodesData.filter(({ name }) => name !== this.anime);
    this.saveEpisodesData(episodesData);
  }
}

export default EpisodeData;
