"use client";
import React from "react";
import styles from "./GoalsCss/Header.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <h1 className={styles.pageHeading}><b>Goal Management</b></h1>
      </nav>
    </header>
  );
};

export default Header;
