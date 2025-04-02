import React from "react";
import styles from "./GoalsCss/ProgressBar.module.css";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressFill} style={{ width: `${progress}%` }} />
    </div>
  );
};
export default ProgressBar;