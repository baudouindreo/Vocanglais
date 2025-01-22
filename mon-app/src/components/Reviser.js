// Reviser.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

const Reviser = () => {
  const [mot, setMot] = useState(null);
  const [traduction, setTraduction] = useState('');
  const [afficher, setAfficher] = useState(false);

  const tirerMotAleatoire = async () => {
    setAfficher(false);
    const { data, error } = await supabase.from('vocabulaire').select('*');
    if (error) {
      alert('Erreur : ' + error.message);
    } else if (data.length > 0) {
      const motAleatoire = data[Math.floor(Math.random() * data.length)];
      setMot(motAleatoire.mot);
      setTraduction(motAleatoire.traduction);
    } else {
      alert('Aucun mot disponible.');
    }
  };

  useEffect(() => {
    tirerMotAleatoire();
  }, []);

  return (
    <div className="container">
      <h1>Réviser le vocabulaire</h1>
      {mot ? (
        <div>
          <p><strong>Mot :</strong> {mot}</p>
          {afficher ? (
            <p><strong>Traduction :</strong> {traduction}</p>
          ) : (
            <button onClick={() => setAfficher(true)}>Afficher la traduction</button>
          )}
          <button onClick={tirerMotAleatoire}>Mot suivant</button>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default Reviser;
