import BottomNav from "../../components/BottomNav";
import React, { useState } from "react";
import CheckpointComponent from "../../components/CheckpointComponent";
import Sidebar from "../../components/Sidebar";
import "../../css/lessons.css";

export default function Lesson2() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const sidebarItems = [
        "1. The Value of Prayer",
        "2. How to Pray",
        "3. Prayer in Daily Life",
        "4. Answers to Prayers",
        "5. Building a Personal Relationship with God",
        "6. Teaching Others to Pray",
    ];

    // Questions and answers for the checkpoint
    const questions = [
        "Why do we pray?",
        "What elements should be included in prayer?",
        "How does God answer prayers?",
    ];

    const answers = [
        "To communicate with Heavenly Father", // Correct answer for Q1
        "To make wishes come true",
        "Only when we are in trouble",

        "Address God, express gratitude, ask for needs, close in the name of Jesus Christ", // Correct answer for Q2
        "Recite memorized words",
        "Only ask for things we want",

        "Through feelings, thoughts, scriptures, and other people", // Correct answer for Q3
        "Always with a loud voice",
        "Only with visible signs",
    ];

    return (
        <>
            <div className="lesson-container">
                <button className="hamburger-button" onClick={toggleSidebar}>
                    <span className="hamburger-icon">☰</span>
                </button>

                <div className={`sidebar-wrapper ${sidebarOpen ? 'open' : ''}`}>
                    <Sidebar items={sidebarItems} />
                </div>

                <div className="lesson-content">
                    <h2>Prayer: Communicating with Our Heavenly Father</h2>

                    <h3>The Value of Prayer</h3>
                    <div className="lesson-paragraph">
                        Prayer is a sacred privilege that allows us to communicate directly with our Heavenly Father.
                        Through prayer, we express gratitude, seek guidance, request blessings, and strengthen our
                        relationship with God. The scriptures teach that we should "pray always" and that sincere
                        prayer invites the Spirit into our lives, bringing peace, comfort, and direction.
                    </div>

                    <h3>How to Pray</h3>
                    <div className="lesson-paragraph">
                        Prayer follows a simple pattern taught by Jesus Christ. We begin by addressing our Heavenly Father,
                        then express gratitude for our blessings, ask for what we need, and close in the name of Jesus Christ.
                        While prayers can be offered silently or vocally, alone or with others, they should always be spoken
                        with sincerity and real intent. The words we use are less important than the feelings in our hearts.
                    </div>

                    <h3>Prayer in Daily Life</h3>
                    <div className="lesson-paragraph">
                        Consistent prayer—morning and night, individually and with family—establishes a pattern of
                        regular communication with God. In addition to these set times, we can pray in our hearts throughout
                        the day, seeking guidance for decisions, protection from temptation, and help in serving others.
                        Prayer becomes most meaningful when it is a natural part of our daily routine rather than an
                        occasional practice.
                    </div>

                    <h3>Answers to Prayers</h3>
                    <div className="lesson-paragraph">
                        God always hears and answers our prayers, though not always in the way or timing we expect.
                        Answers may come through peaceful feelings, inspired thoughts, relevant scriptures, or the
                        words and actions of others. Sometimes the answer is "yes," sometimes "no," and sometimes
                        "not yet." Learning to recognize these answers requires patience, faith, and spiritual sensitivity.
                        As we act on the guidance we receive, our ability to recognize answers will increase.
                    </div>

                    <h3>Building a Personal Relationship with God</h3>
                    <div className="lesson-paragraph">
                        Regular, heartfelt prayer is essential to developing a meaningful relationship with God.
                        Just as relationships with friends grow through consistent communication, our connection with
                        Heavenly Father deepens when we speak with Him often and listen for His guidance. Through prayer,
                        we come to know God's character and feel His love more fully. This relationship becomes a source
                        of strength and comfort throughout our lives.
                    </div>

                    <h3>Teaching Others to Pray</h3>
                    <div className="lesson-paragraph">
                        We can help others experience the blessings of prayer by sharing our testimonies and experiences.
                        Parents have a sacred responsibility to teach children to pray from an early age, both through example
                        and instruction. As we invite others to pray, we provide them with a direct way to seek and receive
                        personal revelation and build their own relationship with God.
                    </div>

                    {/* Checkpoint section at the end */}
                    <div className="checkpoint-section">
                        <CheckpointComponent questions={questions} answers={answers} />
                    </div>
                </div>

                {/* Overlay to close sidebar when clicking outside */}
                {sidebarOpen && (
                    <div className="sidebar-overlay" onClick={toggleSidebar}></div>
                )}
            </div>
            <BottomNav />
        </>
    );
}