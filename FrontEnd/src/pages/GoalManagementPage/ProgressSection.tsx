import React from "react";
import styles from "./ProgressSection.css";
import ProgressBar from "./ProgressBar";

const ProgressSection: React.FC = () => {
  return (
    <section className={styles.progressSection}>
      <h2 className={styles.sectionTitle}>Learning Progress</h2>

      <div className={styles.lessonProgress}>
        <div className={styles.progressItem}>
          <div className={styles.progressHeader}>
            <strong>Lesson 1:</strong> 68%
          </div>
          <ProgressBar progress={68} />
        </div>

        <div className={styles.progressItem}>
          <div className={styles.progressHeader}>
            <strong>Testimony Activity:</strong> 70%
          </div>
          <ProgressBar progress={70} />
        </div>
      </div>

      <div className={styles.levelProgress}>
        <h3 className={styles.levelTitle}>350 More Points Until Level 50!</h3>
        <div className={styles.levelBar}>
          <div className={styles.levelFill} style={{ width: "72%" }} />
        </div>
        <div className={styles.points}>1,200pts</div>
      </div>

      <div className={styles.statsSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1e791dab3bbeb0ec5e88e0e63e7a6baa235eb1f"
          alt="Scripture reading"
          className={styles.scriptureImage}
        />
        <p className={styles.statsText}>
          85% of Latter-day Saints who read the scriptures daily say they feel a
          stronger connection to God.
        </p>
      </div>
    </section>
  );
};

export default ProgressSection;
