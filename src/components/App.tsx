import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CoffeeList from "./CoffeeList";
import Contact from "./Contact";
import Layout from "./Layout";
import { coffeeData } from "../data";

export interface JSONValue {
  title: string;
  id: number;
  description: string;
  ingredients: string[];
  image: string;
}

export interface JSONValues extends Array<JSONValue> {}

function App() {
  const [newData, setData] = useState<JSONValues>([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      // get response object with json method on that
      .then((response) => {
        return response.json();
      })
      // tag on another then method whereby we get the data
      .then((jsonData: JSONValue[]) => {
        jsonData = compareData(jsonData);
        setData(jsonData);
        console.log(jsonData);
      });
  }, []);

  const compareData = (jsonData: JSONValue[]) => {
    for (let i = 0; i < coffeeData.length; i++) {
      for (let x = 0; x < jsonData.length; x++) {
        if (jsonData[x].title === coffeeData[i].name) {
          jsonData[x].image = coffeeData[i].image;
        } else {
          // TO BE FOLLOWED-UP: insert the src of a generic image to below
          jsonData[x].image =
            "FOLLOW UP!!!: a generic image for those without a pic";
        }
      }
    }
    return jsonData;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* logic: if the left part is an empty array (which returns fault) then it won't load the right; and if left is true, it goes to right and output the right on the screen */}
          {newData.length > 0 && (
            <Route index element={<CoffeeList newData={newData} />} />
          )}
          <Route path="saved" element={<div>Saved</div>} />
          <Route path="about" element={<div>About</div>} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
