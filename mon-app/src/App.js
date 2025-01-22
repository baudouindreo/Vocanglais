// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AjouterVocabulaire from './components/AjouterVocabulaire';
import Reviser from './components/Reviser';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <Link to="/">Accueil</Link>
          <Link to="/ajouter">Ajouter du vocabulaire</Link>
          <Link to="/reviser">Réviser</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1 className="welcome">Bienvenue sur l'application de vocabulaire !</h1>} />
          <Route path="/ajouter" element={<AjouterVocabulaire />} />
          <Route path="/reviser" element={<Reviser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
