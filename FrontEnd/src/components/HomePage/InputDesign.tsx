"use client";

import React from "react";
import styles from "./InputDesign.module.css";
import { ProfileHeader } from "./ProfileHeader";
import { StatsSection } from "./StatsSection";
import { GoalsSection } from "./GoalsSection";
import { FocusAreas } from "./FocusAreas";
import { LessonSelect } from "./LessonSelect";

const InputDesign: React.FC = () => {
  const goals = [
    { title: "Read First Nephi", progress: 60 },
    { title: "Pray Everyday For 2 Weeks", progress: 85 },
    { title: "Complete 7 Lessons", progress: 30 },
  ];

  return (
    <main className={styles.container}>
      <ProfileHeader name="Alex" />
      <StatsSection streakDays={17} completedTasks={7} totalTasks={10} />
      <button className={styles.resumeButton}>Resume Learning</button>
      <GoalsSection goals={goals} />
      <section className={styles.bottomSection}>
        <FocusAreas />
        <LessonSelect />
      </section>
    </main>
  );
};

export default InputDesign;
