import PropTypes from 'prop-types'; // Import PropTypes

import NavigateButton from '../components/NavigateButton';


function MainPage({ onLogout }) {




  return (
    <div>
      <h1>Welcome to the Main Page!</h1>



      <button onClick={onLogout}>Logout</button>

      <NavigateButton route="/dashboard" />
    </div>
  );
}

// Add PropTypes validation
MainPage.propTypes = {
  onLogout: PropTypes.func.isRequired, // Ensures onLogout is passed and is a function
};

export default MainPage;
