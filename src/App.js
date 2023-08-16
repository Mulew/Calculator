import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './calculator';
import Quote from './quote';
import Home from './Home';
import Navbar from './navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;