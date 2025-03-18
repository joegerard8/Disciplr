import React from "react";
import styles from "./InputDesign.module.css";

const LessonSelect: React.FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Lesson Select</h2>
      <div className={styles.lessonContainer}>
        <div className={styles.lessonCarousel}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/821ccf7fafcb2f45ac23007ed7e37c9973d1e895"
            alt="Lesson thumbnail"
            style={{ width: "56px", height: "78px", borderRadius: "28px" }}
          />
          <p className={styles.lessonTitle}>The Restoration</p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/821ccf7fafcb2f45ac23007ed7e37c9973d1e895"
            alt="Lesson thumbnail"
            style={{ width: "56px", height: "78px", borderRadius: "28px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default LessonSelect;
