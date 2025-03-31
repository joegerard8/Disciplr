import React, { useState } from "react";
import CheckpointComponent from "../../components/CheckpointComponent";
import Sidebar from "../../components/Sidebar";
import "../../css/lessons.css";

export default function Lesson1() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarItems = [
    "1. Why Was a Restoration Needed?",
    "2. Joseph Smith's First Vision",
    "3. The Coming Forth of the Book of Mormon",
    "4. The Restoration of the Priesthood",
    "5. Christ's Church Today",
    "6. What the Restoration Means for You",
  ];
  
  // Questions and answers for the checkpoint
  const questions = [
    "What happened after Jesus Christ and His apostles died?",
    "Why did Joseph Smith pray in 1820?",
    "Who appeared to Joseph Smith in the First Vision?",
  ];
  
  const answers = [
    "Some of Christ's teachings were lost or changed", // Correct answer for Q1
    "The world became more peaceful",
    "Everyone followed the same religion",
    
    "He wanted to know which church to join", // Correct answer for Q2
    "He was asking for good weather",
    "He was writing a book",
    
    "God the Father and Jesus Christ", // Correct answer for Q3
    "An angel",
    "Moses and Elijah",
  ];

  return (
    <div className="lesson-container">
      <button className="hamburger-button" onClick={toggleSidebar}>
        <span className="hamburger-icon">☰</span>
      </button>
      
      <div className={`sidebar-wrapper ${sidebarOpen ? 'open' : ''}`}>
        <Sidebar items={sidebarItems} />
      </div>
      
      <div className="lesson-content">
        <h2>The Restoration of the Gospel</h2>
        
        <h3>Why Was a Restoration Needed?</h3>
        <div className="lesson-paragraph">
          After Jesus Christ and His apostles died, many of His teachings were
          lost or changed. Over time, different churches were formed, each
          teaching different beliefs. Because of this, God promised to restore
          the fullness of the gospel in the latter days.
        </div>

        <h3>Joseph Smith's First Vision</h3>
        <div className="lesson-paragraph">
          In 1820, a young boy named Joseph Smith wanted to know which church to
          join. He prayed for guidance, and God the Father and Jesus Christ
          appeared to him. They told him not to join any church because Christ's
          original Church was not on the earth. This event is called the First
          Vision, and it was the beginning of the Restoration.
        </div>

        <h3>The Coming Forth of the Book of Mormon</h3>
        <div className="lesson-paragraph">
          In 1823, Joseph Smith was visited by the angel Moroni, who told him about
          an ancient record written on gold plates. These plates contained the history
          of God's dealings with people in the Americas. Joseph was later given the power
          to translate these records, and in 1830, the Book of Mormon was published.
          This book serves as another testament of Jesus Christ and is central to the Restoration.
        </div>

        <h3>The Restoration of the Priesthood</h3>
        <div className="lesson-paragraph">
          In 1829, John the Baptist appeared to Joseph Smith and Oliver Cowdery and conferred
          upon them the Aaronic Priesthood, which includes the authority to baptize. Later, Peter,
          James, and John—three of Christ's original apostles—appeared and restored the Melchizedek Priesthood,
          which includes the authority to lead Christ's Church and perform sacred ordinances.
          This priesthood power was necessary for the full organization of the Church.
        </div>

        <h3>Christ's Church Today</h3>
        <div className="lesson-paragraph">
          On April 6, 1830, The Church of Jesus Christ of Latter-day Saints was officially organized.
          With priesthood authority, modern prophets, continuing revelation, and sacred ordinances,
          the Church today is the same organization that Christ established during His ministry.
          Led by living prophets, the Church continues to spread the teachings of Jesus Christ throughout the world.
        </div>

        <h3>What the Restoration Means for You</h3>
        <div className="lesson-paragraph">
          The Restoration means that we have access to the same blessings that existed in Christ's original Church.
          We can receive guidance through living prophets, read God's word in the Book of Mormon,
          and participate in sacred ordinances like baptism and temple worship. Because of the Restoration,
          we can develop a personal relationship with Jesus Christ and follow His gospel in its fullness.
        </div>
        
        {/* Checkpoint section at the end */}
        <div className="checkpoint-section">
          <CheckpointComponent questions={questions} answers={answers} />
        </div>
      </div>+
      
      {/* Overlay to close sidebar when clicking outside */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </div>
  );
}

