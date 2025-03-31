import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./InputDesign.module.css";

const LessonSelect: React.FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Lesson Select</h2>
      <div className={styles.lessonContainer}>
        <div className={styles.lessonCarousel}>
          {/* Navigate to Lesson1 */}
          <Link to="/lesson1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/821ccf7fafcb2f45ac23007ed7e37c9973d1e895"
              alt="Lesson 1 thumbnail"
              style={{ width: "56px", height: "78px", borderRadius: "28px" }}
            />
          </Link>
          <p className={styles.lessonTitle}>The Restoration</p>

          {/* Navigate to Lesson3 */}
          <Link to="/lesson3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/821ccf7fafcb2f45ac23007ed7e37c9973d1e895"
              alt="Lesson 3 thumbnail"
              style={{ width: "56px", height: "78px", borderRadius: "28px" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LessonSelect;
