import React from 'react';
import Home from './pages/home';
import Inscription from './pages/inscription';
import Connexion from './pages/connexion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRouter';
import Not_found from './pages/not_found';
import Acceuil from './pages/Acceuil';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          // <ProtectedRoute>
            <Home />
          // </ProtectedRoute>  
        } />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/profile" element={<Acceuil />} />
        <Route path="*" element={<Not_found />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;