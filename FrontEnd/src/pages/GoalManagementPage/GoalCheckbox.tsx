import React from "react";
import styles from "./GoalsCss/GoalCheckbox.module.css";

interface GoalCheckboxProps {
  text: string;
  completed: boolean;
}

const GoalCheckbox: React.FC<GoalCheckboxProps> = ({ text, completed }) => {
  return (
    <div className={styles.goalItem}>
      <span className={styles.goalText}>{text}</span>
      <div
        className={`${styles.checkbox} ${completed ? styles.completed : ""}`}
      >
        {completed && (
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="white"/>
            </svg>`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default GoalCheckbox;
