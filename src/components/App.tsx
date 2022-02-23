import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CoffeeList from './CoffeeList';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CoffeeList />} />
          <Route path="saved" element={<div>Saved</div>} />
          <Route path="about" element={<div>About</div>} />
          <Route path="*" element={<div>ERROR</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
