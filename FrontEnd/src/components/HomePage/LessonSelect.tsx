import React from "react";
import styles from "./LessonSelect.module.css";

interface Lesson {
  title: string;
}

export const LessonSelect: React.FC = () => {
  const lessons: Lesson[] = [
    { title: "Restoration" },
    { title: "Plan of Salvation" },
    { title: "Commandments" },
  ];

  return (
    <section className={styles.lessonContainer}>
      <h2 className={styles.lessonTitle}>Lesson Select</h2>
      <div className={styles.lessonGrid}>
        {lessons.map((lesson, index) => (
          <button
            key={index}
            className={styles.lessonCard}
            aria-label={`Select ${lesson.title} lesson`}
          >
            {lesson.title}
          </button>
        ))}
      </div>
    </section>
  );
};
