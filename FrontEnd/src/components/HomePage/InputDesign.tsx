"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import Header from "./Header";
import GoalsSection from "./GoalsSection";
import LessonSelect from "./LessonSelect";
import FocusAreas from "./FocusAreas";

const InputDesign: React.FC = () => {
  return (
    <main className={styles.container}>
      <Header />

      <div className={styles.mainContent}>
        <GoalsSection />
        <LessonSelect />
        <FocusAreas />
      </div>
    </main>
  );
};

export default InputDesign;
