import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
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

interface GoalsSectionProps {
  goals: { goalName: string; goalProgress: number }[];
}

const GoalsSection: React.FC<GoalsSectionProps> = ({ goals }) => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>
        {/* Link the "Goals" text to the GoalManagementPage */}
        <Link to="/goalManagement" className={styles.goalLink}>
          Goals
        </Link>
      </h2>
      <div className={styles.goalsContainer}>
        {goals.map((goal, index) => (
          <GoalItem
            key={index}
            text={goal.goalName}
            progress={goal.goalProgress * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default GoalsSection;
