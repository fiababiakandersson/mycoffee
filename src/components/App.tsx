import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import CoffeeList from './CoffeeList';
import Layout from './Layout';

function App() {

  //Fethcing API Data
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
          <Route index element={<></>} />
          <Route path="saved" element={<div>Saved</div>} />
          <Route path="about" element={<div>About</div>} />
          <Route path="*" element={<div>ERROR</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
