import React from "react";
import styles from "./InputDesign.module.css";

interface GoalItemProps {
  text: string;
  progress: number;
}

const GoalItem: React.FC<GoalItemProps> = ({ text, progress }) => {
  const progressClass =
    progress === 60
      ? styles.progressFill60
      : progress === 85
      ? styles.progressFill85
      : styles.progressFill30;

  return (
    <div className={styles.goalItem}>
      <p className={styles.goalText}>{text}</p>
      <div className={styles.progressBar}>
        <div className={`${styles.progressFill} ${progressClass}`} />
      </div>
    </div>
  );
};

const GoalsSection: React.FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Goals</h2>
      <div className={styles.goalsContainer}>
        <GoalItem text="Read First Nephi" progress={60} />
        <GoalItem text="Pray Everyday For 2 Weeks" progress={85} />
        <GoalItem text="Complete 7 Lessons" progress={30} />
      </div>
    </section>
  );
};

export default GoalsSection;
