import React from "react";
import styles from "./InputDesign.module.css";
import StatusBar from "./StatusBar";
import StatsSection from "./StatsSection";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <StatusBar />

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce7c03f2486214bd46441d73ec9a8c936ea98400"
          alt=""
          style={{
            width: "262px",
            height: "147px",
            opacity: 0.52,
            position: "absolute",
            left: "13px",
            top: "40px",
          }}
        />

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce7c03f2486214bd46441d73ec9a8c936ea98400"
          alt=""
          style={{
            width: "262px",
            height: "147px",
            opacity: 0.52,
            position: "absolute",
            left: "123px",
            top: "85px",
          }}
        />

        <div className={styles.imageContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc948f29ff25deb5cdef020b5551765edc262eff"
            alt=""
            style={{
              width: "136px",
              height: "133px",
              position: "absolute",
              left: "129px",
              top: "111px",
            }}
          />
        </div>

        <h1 className={styles.greeting}>Good Morning, Alex!</h1>

        <StatsSection />
      </div>
    </header>
  );
};

export default Header;
