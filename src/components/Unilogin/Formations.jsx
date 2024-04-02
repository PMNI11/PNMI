import React, { useState, useEffect } from 'react';
import uniData from '../pricing/uni.json';

function Formations() {
  const [degrees, showdegrees] = useState([]);

  useEffect(() => {
    // Mettez à jour l'état formations avec les données du fichier JSON
    showdegrees(uniData.degrees);
  }, []);

  return (
    <div>
      <h2>Liste des formations de l'université</h2>
      <ul>
        {degrees.map((formation, index) => (
          <li key={index}>{formation}</li>
        ))}
      </ul>
    </div>
  );
}

export default Formations;

