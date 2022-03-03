import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenericPicture from "../assets/genericpicture.png";
import { coffeeData } from "../data";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import About from "./About";
import CoffeeList from "./CoffeeList";
import Contact from "./Contact";
import Layout from "./Layout";
import SavedCoffeeList from "./SavedCoffeeList";
import NotFound from "./shared/NotFound";
import SingleCoffee from "./SingleCoffee";
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
  const [hasError, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => {
        return response.json();
      })
      .then((jsonData: Coffee[]) => {
        // jsonData = compareData(jsonData);
        setCoffees(jsonData);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  
const compareData = (jsonData: Coffee[]) => {
  // push in images from local data to JSON
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
  // push in liked status from LS to JSON
  for (let x = 0; x < jsonData.length; x++) {
    const liked: boolean = likedCoffee.indexOf(jsonData[x].id) !== -1;
    if (liked) {
      jsonData[x].isLiked = liked;
    }
  }
  return jsonData;
};

  /** update like status in LS */
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

  if (hasError) {
    return <NotFound />;
  }

  const comparedCoffees = compareData(coffees);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* logic: if the left part is an empty array (which returns false), it won't load the right; and if the left is true, output the right on the screen */}
          {coffees.length > 0 && (
            <Route
              index
              element={
                <CoffeeList
                  onLikeChange={updateLike}
                  coffees={comparedCoffees}
                />
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
                coffees={comparedCoffees}
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
