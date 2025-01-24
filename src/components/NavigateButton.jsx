import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigateButton({ route }) { // Accept a 'route' prop
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(route); // Use the 'route' prop to navigate
  };

  return (
    <>
      <button onClick={handleNavigate}>Go to {route}</button> {/* Dynamically display the route */}
    </>
  );
}

// Define prop types
NavigateButton.propTypes = {
    route: PropTypes.string.isRequired, // 'route' must be a string and is required
  };

export default NavigateButton;
