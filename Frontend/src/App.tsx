import { useState } from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage';
import InputDesign from './components/HomePage/InputDesign'; // Import the component that should come next
import Lesson3 from './components/Lesson3Page/Lessson3'; // Import the component that should come next

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
        <Lesson3 />
        // <InputDesign />
      )}
    </>
  );
}

export default App;
