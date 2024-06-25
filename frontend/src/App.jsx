import React from 'react';
import Home from './pages/home';
import Inscription from './pages/inscription';
import Connexion from './pages/connexion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRouter';
import Not_found from './pages/not_found';
import Acceuil from './pages/Acceuil';
import Profile from './pages/Profile';
import CreateRecipe from './pages/CreateRecipe';
import Recipe from './pages/Recipe';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/recette" element={<Recipe />} />
        <Route path="/user" element={<ProtectedRoute><Acceuil /></ProtectedRoute>}/>
        <Route path="/user/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        <Route path="/user/add" element={<ProtectedRoute><CreateRecipe /></ProtectedRoute>}/>
        <Route path="*" element={<Not_found />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;