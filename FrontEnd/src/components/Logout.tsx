import { useNavigate } from "react-router-dom";
import "./LogoutButton.css"; // Import the CSS file

interface LogoutProps {
  onLogout: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Link from navigating before logout
    onLogout(); // Call the onLogout function passed as a prop
    console.log("Navigating to home page after logout");
    navigate("/"); // Redirect after logout
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;
