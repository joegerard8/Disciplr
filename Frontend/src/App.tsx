import { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./components/login/LoginPage";
import InputDesign from "./components/HomePage/InputDesign";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsLoggedIn(authStatus === "true");
  }, []);

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
