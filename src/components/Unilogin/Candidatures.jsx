import React from 'react';

function Candidatures({ candidatureDetails }) {
  const handleAccept = () => {
    // Logique pour accepter la candidature
  };

  const handleReject = () => {
    // Logique pour refuser la candidature
  };

  return (
    <div>
      <h2>Détails de la candidature</h2>
      <p>Nom du candidat : {candidatureDetails.name}</p>
      <p>Email : {candidatureDetails.email}</p>
      <p>Programme souhaité : {candidatureDetails.program}</p>
      <button onClick={handleAccept}>Accepter</button>
      <button onClick={handleReject}>Refuser</button>
    </div>
  );
}

export default Candidatures;
