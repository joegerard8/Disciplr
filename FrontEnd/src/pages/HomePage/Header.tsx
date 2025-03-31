import React from "react";
import styles from "./InputDesign.module.css";
import StatusBar from "./StatusBar";

// Define the types for props
interface HeaderProps {
  user: {
    firstName: string;
    level: number;
    points: number;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <StatusBar />

        {/* Image of the person */}
        <div className={styles.imageContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc948f29ff25deb5cdef020b5551765edc262eff"
            alt="User"
            style={{
              width: "136px",
              height: "133px",
              position: "absolute",
              left: "129px",
              top: "111px",
            }}
          />
        </div>

        <h1 className={styles.greeting}>Good Morning, {user.firstName}!</h1>

        {/* Display user's level and points */}
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
    </header>
  );
};

export default Header;
