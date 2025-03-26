import React from "react";
import styles from "./InputDesign.module.css";

interface FocusItemProps {
  color: string;
  text: string;
}

const FocusItem: React.FC<FocusItemProps> = ({ color, text }) => {
  return (
    <div className={styles.focusItem}>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9.5" cy="9.5" r="9.5" fill={color} />
      </svg>
      <p className={styles.focusText}>{text}</p>
    </div>
  );
};

const FocusAreas: React.FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Focus Areas</h2>
      <div className={styles.focusContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b3d616581ee766ac7cd3e0a8430dac1d665d4a8"
          alt="Focus areas illustration"
          style={{ width: "100px", height: "100px" }}
        />
        <div className={styles.focusItems}>
          <FocusItem color="#D2555A" text="Restoration" />
          <FocusItem color="#FFC36E" text="Prayer" />
          <FocusItem color="#A5D76E" text="Prophets" />
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
