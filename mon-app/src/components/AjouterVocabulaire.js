// AjouterVocabulaire.js
import React, { useState } from 'react';
import { supabase } from '../supabase';

const AjouterVocabulaire = () => {
  const [mot, setMot] = useState('');
  const [traduction, setTraduction] = useState('');

  const ajouterMot = async () => {
    if (mot && traduction) {
      const { error } = await supabase.from('vocabulaire').insert([{ mot, traduction }]);
      if (error) {
        alert('Erreur : ' + error.message);
      } else {
        alert('Mot ajouté avec succès !');
        setMot('');
        setTraduction('');
      }
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="container">
      <h1>Ajouter du vocabulaire</h1>
      <input
        type="text"
        placeholder="Mot en anglais"
        value={mot}
        onChange={(e) => setMot(e.target.value)}
      />
      <input
        type="text"
        placeholder="Traduction"
        value={traduction}
        onChange={(e) => setTraduction(e.target.value)}
      />
      <button onClick={ajouterMot}>Ajouter</button>
    </div>
  );
};

export default AjouterVocabulaire;
