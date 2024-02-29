// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Projet/componnent/Header';
import AnimeDetail from './Projet/componnent/animedetail';

import "./Projet/assets/css/style.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/detail/:id" element={<AnimeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
