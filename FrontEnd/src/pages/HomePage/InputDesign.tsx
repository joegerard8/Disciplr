"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./InputDesign.module.css";
import Header from "./Header";
import GoalsSection from "./GoalsSection";
import LessonSelect from "./LessonSelect";
import FocusAreas from "./FocusAreas";
import BottomNav from "../../components/BottomNav";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface Goal {
  goalName: string;
  goalDescription: string;
  goalTargetDate: string;
  goalProgress: number;
}

interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  level: number;
  points: number;
  goals: Goal[];
}

const InputDesign: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const bottomNavRef = useRef<HTMLDivElement>(null);
  const [bottomNavHeight, setBottomNavHeight] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5212/api/Book/allInfo")
      .then((response) => response.json())
      .then((data) => setUserData(data[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  useEffect(() => {
    if (bottomNavRef.current) {
      setBottomNavHeight(bottomNavRef.current.offsetHeight);
    }
  }, []);

  return (
    <main className={styles.container}>
      {userData && (
        <>
          <Header user={userData} />
          <div
            className={styles.mainContent}
            style={{ paddingBottom: `${bottomNavHeight}px` }}
          >
            <GoalsSection goals={userData.goals} />
            <LessonSelect />
            <FocusAreas />
          </div>
          <div className={styles.fixedBottom} ref={bottomNavRef}>
            <BottomNav />
          </div>
        </>
      )}
    </main>
  );
};

export default InputDesign;
