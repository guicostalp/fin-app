import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function LandingPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Gui' && password === '123') {
      onLogin(); // Call the onLogin function passed from App.jsx
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
}

// Add PropTypes validation
LandingPage.propTypes = {
  onLogin: PropTypes.func.isRequired, // Ensures onLogin is passed and is a function
};

export default LandingPage;
