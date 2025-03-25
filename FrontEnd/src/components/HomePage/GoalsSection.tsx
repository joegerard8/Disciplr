import React from "react";
import styles from "./InputDesign.module.css";

interface Goal {
  title: string;
  progress: number;
}

interface GoalsSectionProps {
  goals: Goal[];
}

export const GoalsSection: React.FC<GoalsSectionProps> = ({ goals }) => {
  return (
    <section className={styles.goalsContainer}>
      <div className={styles.goalsWrapper}>
        <h2 className={styles.goalsTitle}>Goals</h2>
        {goals.map((goal, index) => (
          <article key={index} className={styles.goalItem}>
            <h3 className={styles.goalTitle}>{goal.title}</h3>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${goal.progress}%` }}
                role="progressbar"
                aria-valuenow={goal.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
