import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./InputDesign.module.css";

const LessonSelect: React.FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Lesson Select</h2>
      <div className={styles.lessonContainer}>
        <div className={styles.lessonCarousel}>
          {/* Navigate to The Restoration */}
          <Link to="/lesson1" className={styles.lessonLink}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/821ccf7fafcb2f45ac23007ed7e37c9973d1e895"
              alt="The Restoration thumbnail"
              className={styles.lessonImage}
            />
            <p className={styles.lessonTitle}>The Restoration</p>
          </Link>

          {/* Navigate to The Plan of Salvation */}
          <Link to="/lesson2" className={styles.lessonLink}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/821ccf7fafcb2f45ac23007ed7e37c9973d1e895"
              alt="The Plan of Salvation thumbnail"
              className={styles.lessonImage}
            />
            <p className={styles.lessonTitle}>The Plan of Salvation</p>
          </Link>

          {/* Navigate to The Gospel of Jesus Christ */}
          <Link to="/lesson3" className={styles.lessonLink}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/821ccf7fafcb2f45ac23007ed7e37c9973d1e895"
              alt="The Gospel of Jesus Christ thumbnail"
              className={styles.lessonImage}
            />
            <p className={styles.lessonTitle}>The Gospel of Jesus Christ</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LessonSelect;
