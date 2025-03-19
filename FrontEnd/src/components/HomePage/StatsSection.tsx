import React from "react";
import styles from "./InputDesign.module.css";

const StatsSection: React.FC = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statContainer}>
        <h3 className={styles.statLabel}>Streak</h3>
        <p className={styles.streakValue}>17</p>
        <p className={styles.statUnit}>days</p>
      </div>

      <button className={styles.resumeButton}>Resume Learning</button>

      <div className={styles.statContainer}>
        <h3 className={styles.statLabel}>Progress</h3>
        <p className={styles.progressValue}>7/10</p>
        <p className={styles.statUnit}>tasks done</p>
      </div>
    </section>
  );
};

export default StatsSection;
