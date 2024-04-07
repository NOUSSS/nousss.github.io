import s1 from "@/assets/Animes/JojoBizarreAdventure/Saisons/saison1.png";
import s2 from "@/assets/Animes/JojoBizarreAdventure/Saisons/saison2.jpg";
import s3 from "@/assets/Animes/JojoBizarreAdventure/Saisons/saison3.jpg";
import s4 from "@/assets/Animes/JojoBizarreAdventure/Saisons/saison4.webp";
import s5 from "@/assets/Animes/JojoBizarreAdventure/Saisons/saison5.webp";
import s6 from "@/assets/Animes/JojoBizarreAdventure/Saisons/saison6.jpg";
import s7 from "@/assets/Animes/JojoBizarreAdventure/Saisons/oav.webp";

const images = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
  6: s6,
  7: s7,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
