import React from "react";
import styles from "./InputDesign.module.css";

interface FocusItemProps {
  color: string;
  text: string;
}

const FocusItem: React.FC<FocusItemProps> = ({ color, text }) => {
  return (
    <div className={styles.focusItem}>
      <p className={styles.focusText}>{text}</p>
    </div>
  );
};

const FocusAreas: React.FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}></h2>
      <div className={styles.focusContainer}>
        <div className={styles.focusItems}>
          <FocusItem color="#D2555A" text="" />
          <FocusItem color="#FFC36E" text="" />
          <FocusItem color="#A5D76E" text="" />
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
