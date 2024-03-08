import F1 from "@/assets/Animes/DragonBallZ/Films/0.jpg";
import F2 from "@/assets/Animes/DragonBallZ/Films/1.jpg";
import F3 from "@/assets/Animes/DragonBallZ/Films/2.jpg";
import F4 from "@/assets/Animes/DragonBallZ/Films/3.jpg";
import F5 from "@/assets/Animes/DragonBallZ/Films/4.jpg";
import F6 from "@/assets/Animes/DragonBallZ/Films/5.jpg";
import F7 from "@/assets/Animes/DragonBallZ/Films/6.jpg";
import F8 from "@/assets/Animes/DragonBallZ/Films/7.jpg";
import F9 from "@/assets/Animes/DragonBallZ/Films/8.webp";
import F10 from "@/assets/Animes/DragonBallZ/Films/9.jpg";
import F11 from "@/assets/Animes/DragonBallZ/Films/10.jpg";
import F12 from "@/assets/Animes/DragonBallZ/Films/11.jpg";
import F13 from "@/assets/Animes/DragonBallZ/Films/12.webp";
import F14 from "@/assets/Animes/DragonBallZ/Films/13.jpeg";

export const images = {
  0: F1,
  1: F2,
  2: F3,
  3: F4,
  4: F5,
  5: F6,
  6: F7,
  7: F8,
  8: F9,
  9: F10,
  10: F11,
  11: F12,
  12: F13,
  13: F14,
};

export type ImageKey = keyof typeof images;
export const getImage = (key: ImageKey) => images[key];
