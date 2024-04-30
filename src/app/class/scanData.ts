import { Data } from "@/typings/types";

class ScanData {
  public anime: string | undefined;

  constructor(anime: string | undefined) {
    this.anime = anime;
  }

  private getScansData(): Data.ScansData[] | null {
    const scans = localStorage.getItem("scans");
    if (!scans) return null;

    try {
      return JSON.parse(scans) as Data.ScansData[];
    } catch (error) {
      console.error("Error dans le storage des scans:", error);
      return null;
    }
  }

  private saveScansData(scansData: Data.ScansData[]): void {
    localStorage.setItem("scans", JSON.stringify(scansData));
  }

  private updateAnimeData(updateFn: (animeData: Data.ScansData) => void): void {
    if (!this.anime) return;

    let scansData = this.getScansData() || [];
    let animeData = scansData.find(({ name }) => name === this.anime);

    if (!animeData) {
      animeData = {
        name: this.anime,
        chapitre: "",
        version: "",
        method: "",
      };

      scansData.push(animeData);
    }

    updateFn(animeData);
    this.saveScansData(scansData);
  }

  get(): undefined | Data.ScansData {
    const scansData = this.getScansData();
    return scansData?.find(({ name }) => name === this.anime);
  }

  setChapitre(newChapitre: string) {
    this.updateAnimeData((animeData) => (animeData.chapitre = newChapitre));
  }

  setVersion(newVersion: string) {
    this.updateAnimeData((animeData) => (animeData.version = newVersion));
  }

  setMethod(newMethod: string) {
    this.updateAnimeData((animeData) => (animeData.method = newMethod));
  }
}

export default ScanData;
