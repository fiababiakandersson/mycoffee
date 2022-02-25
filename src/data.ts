import Breve from "./assets/breve.webp"

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
    image: "../assets/caffe-latte.webp"
  },
  {
    name: "Cappuccino",
    description:
      "Blablabla and blablabla and blablabla and blablabla and blablabla and blablabla ",
    ingredients: "lots of coffee!!",
    id: "3",
    image: "../assets/cappuccino.webp"
  },
  {
    name: "Americano",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "4",
    image: "../assets/americano.webp"
  },
  {
    name: "Espresso",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "5",
    image: "../assets/espresso.webp"
  },
  {
    name: "Cortado",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "6",
    image: "../assets/cortado.webp"
  },
  {
    name: "Red eye",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "7",
    image: "../assets/red-eye.webp"
  },
  {
    name: "wqenqwkenqwkne",
    description: "asdjaslfjaslfjaslkjfsjflkjaslfjlasj",
    ingredients: "kjwklwjqfljlwqjlfjwqfkljlq",
    id: "8",
    image: "../assets/.png"
  },
  
];

