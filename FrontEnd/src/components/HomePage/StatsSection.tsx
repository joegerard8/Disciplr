import React from "react";
import styles from "./StatsSection.module.css";

interface StatsSectionProps {
  streakDays: number;
  completedTasks: number;
  totalTasks: number;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  streakDays,
  completedTasks,
  totalTasks,
}) => {
  return (
    <section className={styles.statsContainer}>
      <article className={styles.statCard}>
        <h2 className={styles.statTitle}>Streak</h2>
        <p className={styles.statValue}>{streakDays}</p>
        <p className={styles.statUnit}>days</p>
      </article>
      <article className={styles.statCard}>
        <h2 className={styles.statTitle}>Progress</h2>
        <p className={styles.statValue}>{`${completedTasks}/${totalTasks}`}</p>
        <p className={styles.statUnit}>tasks done</p>
      </article>
    </section>
  );
};
