import BottomNav from "../../components/BottomNav";
import React, { useState } from "react";
import CheckpointComponent from "../../components/CheckpointComponent";
import Sidebar from "../../components/Sidebar";
import "../../css/lessons.css";

export default function Lesson3() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const questions: Array<string> = [
    "What is the first principle of the gospel?",
    "Why do we need to repent?",
    "What happens after baptism?",
  ];
  const answers: Array<string> = [
    "Faith in Jesus Christ",
    "Serving others",
    "Reading scriptures",
    "To be forgiven and become more like Christ",
    "Because we will never make mistakes again",
    "So we can avoid going to church",
    "We receive the gift of the Holy Ghost",
    "We never have to repent again",
    "We instantly become perfect",
  ];
  const sidebarItems: string[] = [
    "1. What is the Gospel of Jesus Christ?",
    "2. Faith in Jesus Christ",
    "3. Repentance",
    "4. Baptism and Receiving the Gift of the Holy Ghost",
    "5. Enduring to the End",
  ];

  return (
    <>
    <div className="lesson-container">
      <button className="hamburger-button" onClick={toggleSidebar}>
        <span className="hamburger-icon">☰</span>
      </button>

      <div className={`sidebar-wrapper ${sidebarOpen ? "open" : ""}`}>
        <Sidebar items={sidebarItems} />
      </div>

      <div className="lesson-content">
        <h2>What is the Gospel of Jesus Christ?</h2>
        <div className="lesson-paragraph">
          The gospel is the path God has provided for us to return to His
          presence and receive eternal life. It is founded on faith in Jesus
          Christ and His atoning sacrifice, which makes it possible for us to
          be forgiven of our sins and become more like Him. By following His
          gospel, we can experience joy and peace in this life and eternal
          happiness in the life to come. The Gospel is defined by the following
          four steps.
        </div>
        <h3>1. Faith in Jesus Christ</h3>
        <div className="lesson-paragraph">
          Faith in Jesus Christ means trusting Him and following His teachings.
          It is the first step toward receiving salvation and helps us make
          righteous choices.
        </div>
        <h3>2. Repentance</h3>
        <div className="lesson-paragraph">
          Repentance is turning away from sin and striving to become better
          through Jesus Christ. As we repent, we feel peace and joy, knowing we
          are forgiven.
        </div>
        <h3>3. Baptism and Receiving the Gift of the Holy Ghost</h3>
        <div className="lesson-paragraph">
          Baptism is a sacred ordinance where we make a covenant to follow
          Jesus Christ. After baptism, we receive the gift of the Holy Ghost,
          which guides, comforts, and strengthens us.
        </div>
        <h3>4. Enduring to the End</h3>
        <div className="lesson-paragraph">
          Living the gospel is a lifelong journey. We continue to strengthen
          our faith, repent when needed, and follow Jesus Christ every day. By
          enduring to the end, we prepare for eternal life with God.
        </div>
        <div className="checkpoint-section">
          <CheckpointComponent questions={questions} answers={answers} />
        </div>
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </div>
    <BottomNav />
    </>
  );
}