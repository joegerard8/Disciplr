import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LogoutProps {
  onLogout?: () => void;
}

export const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');

    // Optional: Call any additional logout callback
    if (onLogout) {
      onLogout();
    }

    // Redirect to login page
    navigate('/login');
  };

  return (
    <button 
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
};

export default Logout;