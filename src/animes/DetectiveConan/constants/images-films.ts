import f1 from "@/assets/Animes/DetectiveConan/Films/1.jpg";
import f2 from "@/assets/Animes/DetectiveConan/Films/2.jpg";
import f3 from "@/assets/Animes/DetectiveConan/Films/3.jpg";
import f4 from "@/assets/Animes/DetectiveConan/Films/4.jpg";
import f5 from "@/assets/Animes/DetectiveConan/Films/5.webp";
import f6 from "@/assets/Animes/DetectiveConan/Films/6.jpg";
import f7 from "@/assets/Animes/DetectiveConan/Films/7.webp";
import f8 from "@/assets/Animes/DetectiveConan/Films/8.jpg";
import f9 from "@/assets/Animes/DetectiveConan/Films/9.jpg";
import f10 from "@/assets/Animes/DetectiveConan/Films/10.jpg";
import f11 from "@/assets/Animes/DetectiveConan/Films/11.jpg";
import f12 from "@/assets/Animes/DetectiveConan/Films/12.jpg";
import f13 from "@/assets/Animes/DetectiveConan/Films/13.jpg";
import f14 from "@/assets/Animes/DetectiveConan/Films/14.jpg";
import f15 from "@/assets/Animes/DetectiveConan/Films/15.webp";
import f16 from "@/assets/Animes/DetectiveConan/Films/16.jpg";
import f17 from "@/assets/Animes/DetectiveConan/Films/17.jpg";
import f18 from "@/assets/Animes/DetectiveConan/Films/18.jpg";
import f19 from "@/assets/Animes/DetectiveConan/Films/19.jpg";
import f20 from "@/assets/Animes/DetectiveConan/Films/20.jpg";
import f21 from "@/assets/Animes/DetectiveConan/Films/21.jpg";
import f22 from "@/assets/Animes/DetectiveConan/Films/22.webp";
import f23 from "@/assets/Animes/DetectiveConan/Films/23.jpg";
import f24 from "@/assets/Animes/DetectiveConan/Films/24.webp";
import f25 from "@/assets/Animes/DetectiveConan/Films/25.webp";
import f26 from "@/assets/Animes/DetectiveConan/Films/26.webp";
import f27 from "@/assets/Animes/DetectiveConan/Films/27.webp";

const images = {
  1: f1,
  2: f2,
  3: f3,
  4: f4,
  5: f5,
  6: f6,
  7: f7,
  8: f8,
  9: f9,
  10: f10,
  11: f11,
  12: f12,
  13: f13,
  14: f14,
  15: f15,
  16: f16,
  17: f17,
  18: f18,
  19: f19,
  20: f20,
  21: f21,
  22: f22,
  23: f23,
  24: f24,
  25: f25,
  26: f26,
  27: f27,
};

export type ImageKey = keyof typeof images;
export const getImageFilms = (key: ImageKey) => images[key];
