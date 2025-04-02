import React from "react";
import styles from "./GoalsCss/ProgressSection.module.css";
import ProgressBar from "./ProgressBar";

const ProgressSection: React.FC = () => {
  return (
    <section className={styles.progressSection}>
      <h2 className={styles.pageTitle3}>Learning Progress</h2>
      <div className={styles.lessonProgress}>
        <div className={styles.progressItem}>
          <div className={styles.progressHeader}>
            <strong>Lesson 1:</strong> 20%
          </div>
          <ProgressBar progress={20} />
        </div>
        <div className={styles.progressItem}>
          <div className={styles.progressHeader}>
            <strong>Testimony Activity:</strong> 70%
          </div>
          <ProgressBar progress={70} />
        </div>
      </div>
    </section>
  );
};
export default ProgressSection;