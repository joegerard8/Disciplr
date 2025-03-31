"use client";
import React from "react";
import styles from "./GoalsList.module.css";
import GoalCheckbox from "./GoalCheckbox";

const GoalsList: React.FC = () => {
  const goals = [
    { text: "Read First Nephi", completed: false },
    { text: "Read Everyday for 2 weeks", completed: false },
    { text: "Complete 7 Lessons", completed: false },
    { text: "Reach Level 10", completed: true },
  ];

  return (
    <section className={styles.goalsContainer}>
      <h2 className={styles.sectionTitle}>Goals</h2>
      <div className={styles.goalsList}>
        {goals.map((goal, index) => (
          <GoalCheckbox
            key={index}
            text={goal.text}
            completed={goal.completed}
          />
        ))}
      </div>
    </section>
  );
};

export default GoalsList;
