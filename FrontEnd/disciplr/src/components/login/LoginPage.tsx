import React from 'react';
import { LoginForm } from './LoginForm';
import styles from './LoginPage.module.css';
import { LoginHeader } from './LoginHeader';

// Define the props interface with proper typing
interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.contentWrapper}>
        <LoginHeader />
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;