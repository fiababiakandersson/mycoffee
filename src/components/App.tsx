import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import CoffeeList from "./CoffeeList";
import Contact from "./Contact";
import Layout from "./Layout";
import { coffeeData } from "../data";
import NotFound from "./NotFound";
import SingleCoffee from "./SingleCoffee";
import SavedCoffeeList from "./SavedCoffeeList";
import { useLocalStorageState } from "./shared/useLocalStorageState";
import GenericPicture from "../assets/genericpicture.png";

export interface Coffee {
  title: string;
  id: string;
  description: string;
  ingredients: string[];
  image: string;
  isLiked: boolean;
}

function App() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [likedCoffee, setLikedCoffee] = useLocalStorageState<string[]>(
    [],
    "likedCoffee"
  );

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      // get response object with json method on that
      .then((response) => {
        return response.json();
      })
      // tag on another then method whereby we get the data
      .then((jsonData: Coffee[]) => {
        jsonData = compareData(jsonData);
        setCoffees(jsonData);
        console.log(jsonData);
      });
  }, []);

  const compareData = (jsonData: Coffee[]) => {
    for (let i = 0; i < coffeeData.length; i++) {
      for (let x = 0; x < jsonData.length; x++) {
        if (jsonData[x].title === coffeeData[i].name) {
          jsonData[x].image = coffeeData[i].image;
        }
        if (!jsonData[x].image) {
          jsonData[x].image = GenericPicture;
        }
      }
    }

    //Update liked status from local storage
    for (let x = 0; x < jsonData.length; x++) {
      const liked: boolean = likedCoffee.indexOf(jsonData[x].id) !== -1;
      if (liked) {
        jsonData[x].isLiked = liked;
      }
    }
    return jsonData;
  };

  const updateLike = (id: string) => {
    const likedCoffeeIndex = likedCoffee.indexOf(id);
    if (likedCoffeeIndex !== -1) {
      // if it exists
      likedCoffee.splice(likedCoffeeIndex, 1); // remove from LS
      setLikedCoffee([...likedCoffee]); // update LS
      coffees[parseInt(id) - 1].isLiked = false; // set isLiked to false
    } else {
      setLikedCoffee([...likedCoffee, id]);
      coffees[parseInt(id) - 1].isLiked = true;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* logic: if the left part is an empty array (which returns fault) then it won't load the right; and if left is true, it goes to right and output the right on the screen */}
          {coffees.length > 0 && (
            <Route
              index
              element={
                <CoffeeList onLikeChange={updateLike} coffees={coffees} />
              }
            />
          )}
          <Route
            path="/cards/:id"
            element={
              <SingleCoffee coffees={coffees} onLikeChange={updateLike} />
            }
          />
          <Route
            path="saved"
            element={
              <SavedCoffeeList
                onLikeChange={updateLike}
                coffees={coffees}
                likedCoffee={likedCoffee}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
