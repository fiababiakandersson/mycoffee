import Breve from "./assets/breve.webp";
import CaffeLatte from "./assets/caffe-latte.webp";
import Cappuccino from "./assets/cappuccino.webp";
import Americano from "./assets/americano.webp";
import Espresso from "./assets/espresso.webp";
import Cortado from "./assets/cortado.webp";
import RedEye from "./assets/red-eye.webp";
import Macchiato from "./assets/macchiato.webp";
import Mocha from "./assets/mocha.webp";
import FlatWhite from "./assets/flat-white.webp";
import Affogato from "./assets/affogato.webp";
import CafeAuLait from "./assets/cafe-au-lait.webp";
export interface Data {
  name: string;
  id: string;
  image: string;
}

export const coffeeData: Data[] = [
  {
    name: "Black",
    image: Breve,
    id: "1",
  },
  {
    name: "Latte",
    image: CaffeLatte,
    id: "2",
  },
  {
    name: "Cappuccino",
    image: Cappuccino,
    id: "3",
  },
  {
    name: "Americano",
    image: Americano,
    id: "4",
  },
  {
    name: "Espresso",
    image: Espresso,
    id: "5",
  },
  {
    name: "Cortado",
    image: Cortado,
    id: "6",
  },
  {
    name: "Red Eye",
    image: RedEye,
    id: "7",
  },
  {
    name: "Macchiato",
    image: Macchiato,
    id: "8",
  },
  {
    name: "Mocha",
    image: Mocha,
    id: "9",
  },
  {
    name: "Flat White",
    image: FlatWhite,
    id: "10",
  },
  {
    name: "Affogato",
    image: Affogato,
    id: "11",
  },
  {
    name: "Café au Lait",
    image: CafeAuLait,
    id: "12",
  },
];
