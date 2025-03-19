"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.css";

// Define the props interface with proper typing
interface LoginFormProps {
  onLoginSuccess: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("adamJefferson@example.com");
  const [password, setPassword] = useState("*******");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    
    onLoginSuccess();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formContent}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.passwordInput}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign In
        </button>
        <button
          type="button"
          className={styles.forgotPassword}
          onClick={onLoginSuccess}
        >
          Forgot password?
        </button>
      </div>
    </form>
  );
};