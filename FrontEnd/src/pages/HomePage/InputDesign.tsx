"use client";
import React, { useState, useEffect } from "react";
import styles from "./InputDesign.module.css";
import Header from "./Header";
import GoalsSection from "./GoalsSection";
import LessonSelect from "./LessonSelect";
import FocusAreas from "./FocusAreas";
import BottomNav from "../../components/BottomNav";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the types for the API response
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

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("http://localhost:5212/api/Book/allInfo")
      .then((response) => response.json())
      .then((data) => {
        // Assume data is in the shape of your response structure
        setUserData(data[0]); // Get the first user for now
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <main className={styles.container}>
      {userData && (
        <>
        <Header user={userData} />
<div className="container">
  <div className="mainContent">
    <GoalsSection goals={userData.goals} />
    <LessonSelect />
    <FocusAreas />
  </div>
</div>
<div className="fixed-bottom">
  <BottomNav />
</div>

        </>
      )}
    </main>
  );
};

export default InputDesign;
