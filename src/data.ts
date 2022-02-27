import Breve from "./assets/breve.webp"
import CaffeLatte from "./assets/caffe-latte.webp"
import Cappuccino from "./assets/cappuccino.webp"
import Americano from "./assets/americano.webp"
import Espresso from "./assets/espresso.webp"
import Cortado from "./assets/cortado.webp"
import RedEye from "./assets/red-eye.webp"
import Macchiato from "./assets/macchiato.webp"
import Mocha from "./assets/mocha.webp"
import FlatWhite from "./assets/flat-white.webp"
import Affogato from "./assets/affogato.webp"
import CafeAuLait from "./assets/cafe-au-lait.webp"


export interface Data {
  name: string; 
  description: string; 
  ingredients: string;
  id: string;
  image: string;
}

export const coffeeData: Data[] = [
  {
    name: "Breve",
    description: "Description",
    ingredients: "this and that and this and that",
    id: "1",
    image: Breve,
  },
  {
    name: "Caffe Latte",
    description: "Espresso with milkfoam",
    ingredients: "Espresso, milk",
    id: "2",
    image: CaffeLatte,
  },
  {
    name: "Cappuccino",
    description:
      "Blablabla and blablabla and blablabla and blablabla and blablabla and blablabla ",
    ingredients: "lots of coffee!!",
    id: "3",
    image: Cappuccino,
  },
  {
    name: "Americano",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "4",
    image: Americano,
  },
  {
    name: "Espresso",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "5",
    image: Espresso,
  },
  {
    name: "Cortado",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "6",
    image: Cortado,
  },
  {
    name: "Red eye",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "7",
    image: RedEye
  },
  {
    name: "Macchiato",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "8",
    image: Macchiato,
  },
  {
    name: "Mocha",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "8",
    image: Mocha,
  },
  {
    name: "Flat White",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "8",
    image: FlatWhite,
  },
  {
    name: "Affogato",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "8",
    image: Affogato,
  },
  {
    name: "Café au Lait",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "8",
    image: CafeAuLait,
  },

];

