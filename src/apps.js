import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import About from './about';

export default function Apps() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}