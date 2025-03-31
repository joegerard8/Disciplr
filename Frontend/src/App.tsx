import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import InputDesign from "./pages/HomePage/InputDesign";
import Logout from "./components/Logout"; // Create this component
import Lesson3 from "./pages/Lesson3/Lessson3";
import GoalsInterface from "./pages/GoalManagementPage/GoalsInterface";
import Lesson1 from "./pages/Lesson1/Lesson1";
import LessonSelect from "./pages/HomePage/LessonSelect";
import LessonSelectionPage from "./pages/LessonSelectionPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsLoggedIn(authStatus === "true");
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <LoginPage onLoginSuccess={handleLoginSuccess} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <InputDesign />
                <Logout onLogout={handleLogout} />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/" element={<InputDesign />}></Route>
        <Route path="/LessonSelectionPage" element={<LessonSelectionPage />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson3" element={<Lesson3 />} />
        <Route path="/lesson3" element={<Lesson3 />} />
      </Routes>
    </Router>
  );
}

export default App;
