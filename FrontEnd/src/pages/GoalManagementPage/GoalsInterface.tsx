"use client";
import React from "react";
import styles from "./GoalsInterface.module.css";
import Header from "./Header";
import GoalsList from "./GoalsList";
import ProgressSection from "./ProgressSection";

const GoalsInterface: React.FC = () => {
  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.content}>
        <h1 className={styles.pageTitle}>Goal Management</h1>
        <div className={styles.goalsGrid}>
          <GoalsList />
          <section className={styles.reminders}>
            <p className={styles.reminderText}>
              Set a reminder daily at 9am to read scriptures
            </p>
            <p className={styles.reminderText}>
              Reflect on Goal progress weekly and adjust accordingly
            </p>
            <p className={styles.reminderText}>
              Gain 100 points every day to achieve level 10 by end of Month
            </p>
          </section>
        </div>
        <ProgressSection />
      </section>
    </main>
  );
};

export default GoalsInterface;
