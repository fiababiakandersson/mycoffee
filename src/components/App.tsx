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

// export interface JSONValues extends Array<JSONValue> {}
// let data2: JSONValues;

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://api.sampleapis.com/coffee/hot");
      const jsonData: [] = await response.json();
      return compareData(jsonData);
    };
    getData();
  }, []);

  const compareData = (jsonData: JSONValue[]) => {
    for (let i = 0; i < coffeeData.length; i++) {
      for (let x = 0; x < jsonData.length; x++) {
        if (jsonData[x].title === coffeeData[i].name) {
          jsonData[x].image = coffeeData[i].image;
        }
      }
    }
    return jsonData;
    // console.log(jsonData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CoffeeList />} />
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
