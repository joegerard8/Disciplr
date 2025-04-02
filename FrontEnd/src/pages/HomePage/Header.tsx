import React from "react";
import styles from "./header.module.css";

interface HeaderProps {
  user: {
    firstName: string;
    level: number;
    points: number;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        {/* <StatusBar /> */}
        <div className={styles.imageContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc948f29ff25deb5cdef020b5551765edc262eff"
            alt="User"
            className={styles.userImage}
          />
        </div>

        <h1 className={styles.greeting}>Good Morning, {user.firstName}!</h1>

        <div className={styles.statsSection}>
          <div className={styles.statContainer}>
            <p className={styles.statLabel}>Level</p>
            <p className={styles.streakValue}>{user.level}</p>
          </div>
          <div className={styles.statContainer}>
            <p className={styles.statLabel}>Points</p>
            <p className={styles.streakValue}>{user.points}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
