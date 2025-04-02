"use client";
import React from "react";
import styles from "./GoalsCss/GoalsInterface.module.css";
import Header from "./Header";
import GoalsList from "./GoalsList";
import ProgressSection from "./ProgressSection";
import BottomNav from "../../components/BottomNav";

const GoalManagement: React.FC = () => {
  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.content}>
        <div className={styles.goalsGrid}>
          <GoalsList />
          <h1 className={styles.pageTitle2}>Reminders</h1>
          <section className={styles.reminders}>
            
            <ul>
              <li>
                <p className={styles.reminderText}>
                  Set a reminder daily at 9am to read scriptures
                </p>
              </li>
              <li>
              <p className={styles.reminderText}>
                Reflect on Goal progress weekly and adjust accordingly
              </p>
              </li>
              <li>
                  <p className={styles.reminderText}>
                    Gain 100 points every day to achieve level 10 by end of Month
                  </p>
              </li>
            </ul>
          </section>
        </div>
        <ProgressSection />
      </section>
      <BottomNav />
    </main>
  );
};

export default GoalManagement;
