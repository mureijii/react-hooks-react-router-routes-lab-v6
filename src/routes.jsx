// src/routes.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Correct path to Home
import Actors from './pages/Actors'; // Correct path to Actors
import Directors from './pages/Directors'; // Correct path to Directors
import Movie from './pages/Movie'; // Correct path to Movie

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/actors" element={<Actors />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>
  </Router>
);

export default RoutesComponent;