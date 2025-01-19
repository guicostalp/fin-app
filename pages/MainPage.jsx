import PropTypes from 'prop-types'; // Import PropTypes
import { useEffect, useState } from 'react';

function MainPage({ onLogout }) {
  const lastVisit = useState(localStorage.getItem('lastVisit'));

  useEffect(() => {

    // Update the last visit time in localStorage
     const now = new Date();
     localStorage.setItem('lastVisit', now.toISOString());

    // Clear localStorage
    //localStorage.clear();
  }, []);




  return (
    <div>
      <h1>Welcome to the Main Page!</h1>
      <h2>Your last visit: {lastVisit}</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

// Add PropTypes validation
MainPage.propTypes = {
  onLogout: PropTypes.func.isRequired, // Ensures onLogout is passed and is a function
};

export default MainPage;
