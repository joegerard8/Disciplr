import React from "react";
import "../css/lessons.css"; // Import the CSS file

interface CheckpointProps {
  questions: Array<string>;
  answers: Array<string>;
}

export default function CheckpointComponent({ questions, answers }: CheckpointProps) {
  return (
    <>
      <h3>Checkpoint!</h3>
      <ol className="checkpoint-list">
        {questions.map((question, index) => (
          <li key={index} className="question-item">
            {question}
            <ul className="answer-list">
              {answers.slice(index * 3, index * 3 + 3).map((option, i) => (
                <li key={i} className="answer-item">
                  <label className="answer-label">
                    <input
                      type="radio"
                      name={`question${index + 1}`}
                      value={option}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </>
  );
}