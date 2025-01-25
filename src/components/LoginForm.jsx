import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import axios from 'axios';
import { TextField, Button, Box, Typography, Alert, CircularProgress } from '@mui/material';

const LoginForm = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true); // Start loader

    try {
      const response = await axios.post('https://my-python-project-446100.uc.r.appspot.com/login', {
        username,
        password,
      });

      setSuccessMessage('Login successful!');
      console.log(response.data);

      // Navigate to dashboard after successful login
      navigate('/dashboard');

      // Update authentication state in App component
      setIsAuthenticated(true);

    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Login failed. Please check your credentials.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
      console.error(error);
    } finally {
      setLoading(false); // Stop loader

    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        margin: '0 auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: 'white',
        position: 'relative',
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading} // Disable input while loading
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading} // Disable input while loading
          />
        </Box>

        <Box position="relative" height={48}>
          {loading ? (
            <CircularProgress
              size={24}
              sx={{
                color: 'primary.main',
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Login2
            </Button>
          )}
        </Box>
      </form>

      {errorMessage && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {successMessage}
        </Alert>
      )}
    </Box>
  );
};

LoginForm.propTypes = {
  setIsAuthenticated : PropTypes.func.isRequired, // Ensures onLogout is passed and is a function
};



export default LoginForm;
