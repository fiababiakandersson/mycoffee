import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import CoffeeList from "./CoffeeList";
import Contact from "./Contact";
import Layout from "./Layout";

function App() {

   const [coffeeData, setCoffeeData] = useState([]);
   useEffect(() => {
     const getData = async () => {
       const response = await fetch("https://api.sampleapis.com/coffee/hot");
       const jsonData = await response.json();
       console.log(jsonData);
     };
     getData();
   }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CoffeeList />} />
          <Route path="saved" element={<div>Saved</div>} />
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
