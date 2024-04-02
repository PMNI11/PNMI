// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn }) {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Formations">Formations</Link></li>
        <li><Link to="/candidatures">Candidatures</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
