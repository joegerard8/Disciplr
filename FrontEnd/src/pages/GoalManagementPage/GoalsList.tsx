"use client";
import React, { useState } from "react";
import styles from "./GoalsCss/GoalsList.module.css";
import GoalCheckbox from "./GoalCheckbox";

const GoalsList = () => {
  const [goals, setGoals] = useState([
    { id: 1, text: "Read First Nephi", completed: false },
    { id: 2, text: "Read Everyday for 2 weeks", completed: false },
    { id: 3, text: "Complete 7 Lessons", completed: false },
    { id: 4, text: "Reach Level 10", completed: true },
  ]);

  const handleToggleComplete = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const completedCount = goals.filter((goal) => goal.completed).length;
  const totalGoals = goals.length;
  const progressPercentage = (completedCount / totalGoals) * 100;

  return (
    <section className={styles.goalsContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.sectionTitle}>Goal List</h2>
        <div className={styles.statsContainer}>
          <span className={styles.statsText}>
            {completedCount}/{totalGoals} completed
          </span>
        </div>
      </div>

      <div className={styles.progressBarContainer}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className={styles.goalsList}>
        {goals.map((goal) => (
          <GoalCheckbox
            key={goal.id}
            id={goal.id}
            text={goal.text}
            completed={goal.completed}
            onToggle={() => handleToggleComplete(goal.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default GoalsList;