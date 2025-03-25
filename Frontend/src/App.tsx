import { useState } from 'react';
import './App.css';
import LoginPage from '../disciplr/src/components/login/LoginPage';
import InputDesign from './components/HomePage/InputDesign'; // Import the component that should come next

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <InputDesign />
      )}
    </>
  );
}

export default App;
