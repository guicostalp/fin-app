import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const navigate = useNavigate();

  // Logic to check if the user is authenticated
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/main');
    console.log('User is authenticated');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
    console.log('User is logged out');
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (

      <div>
        <Routes>
          <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
          <Route
            path="/main"
            element={isAuthenticated ? <MainPage onLogout={handleLogout} /> : <Navigate to="/" />}
          />
          {/* Add additional routes here as needed */}

          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </div>

  );
}

export default App;
