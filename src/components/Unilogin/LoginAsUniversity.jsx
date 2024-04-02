import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import universitiesData from '../pricing/uni.json'; // Import the JSON data
import Back from '../common/back/Back';
import { Redirect } from 'react-router-dom'; // Import Redirect
import './LoginAsUniversity.css';

function LoginAsUniversity() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToDashboard, setRedirectToDashboard] = useState(false); // State to manage redirection
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const validCredentials = checkCredentials(id, password);
    if (validCredentials) {
      setRedirectToDashboard(true); // Set state to true to trigger redirection
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const checkCredentials = (id, password) => {
    // Iterate over universities data to check for valid credentials
    for (const university of Object.values(universitiesData)) {
      if ((university.Id === id || university.link === id) && university.password === password) {
        return true; // Credentials are valid
      }
      // Check faculties for the university
      for (const faculty of Object.values(university.Faculties)) {
        if ((faculty.Id === id || faculty.link === id) && faculty.password === password) {
          return true; // Credentials are valid
        }
      }
    }
    return false; // No matching credentials found
  };

  if (redirectToDashboard) {
    // Redirect to Dashboard with university or faculty ID included in the URL
    return <Redirect to={`/Dashboard/${id}`} />;
  }

  return (
    <div>
      <Back title="Choose The Right Path" />
      <form onSubmit={handleLogin} className="login-form">
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginAsUniversity;
