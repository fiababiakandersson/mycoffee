import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CoffeeList from "./CoffeeList";
import Contact from "./Contact";
import Layout from "./Layout";

function App() {
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
