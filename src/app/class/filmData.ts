import { Data } from "@/typings/types";

class FilmData {
  public anime: string | undefined;

  constructor(anime: string | undefined) {
    this.anime = anime;
  }

  private getFilmsData(): Data.FilmsData[] | null {
    const films = localStorage.getItem("films");
    if (!films) return null;

    try {
      return JSON.parse(films) as Data.FilmsData[];
    } catch (error) {
      console.error("Error dans le storage des films:", error);
      return null;
    }
  }

  private saveFilmsData(filmsData: Data.FilmsData[]): void {
    localStorage.setItem("films", JSON.stringify(filmsData));
  }

  private updateAnimeData(updateFn: (animeData: Data.FilmsData) => void): void {
    if (!this.anime) return;

    let filmsData = this.getFilmsData() || [];
    let animeData = filmsData.find(({ name }) => name === this.anime);

    if (!animeData) {
      animeData = {
        name: this.anime,
        film: "",
        lang: "",
        lecteur: "",
      };

      filmsData.push(animeData);
    }

    updateFn(animeData);
    this.saveFilmsData(filmsData);
  }

  get(): undefined | Data.FilmsData {
    const filmsData = this.getFilmsData();
    return filmsData?.find(({ name }) => name === this.anime);
  }

  setFilm(newFilm: string) {
    this.updateAnimeData((animeData) => (animeData.film = newFilm));
  }

  setLang(newLang: string) {
    this.updateAnimeData((animeData) => (animeData.lang = newLang));
  }

  setLecteur(newLecteur: string) {
    this.updateAnimeData((animeData) => (animeData.lecteur = newLecteur));
  }
}

export default FilmData;
