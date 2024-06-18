import React from 'react';
import Home from './pages/home';
import Inscription from './pages/inscription';
import Connexion from './pages/connexion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;