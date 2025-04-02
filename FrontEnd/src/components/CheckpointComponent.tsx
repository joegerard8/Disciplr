import React, { useState } from "react";
import "../css/lessons.css";

interface CheckpointProps {
  questions: Array<string>;
  answers: Array<string>;
}

export default function CheckpointComponent({ questions, answers }: CheckpointProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  // First option in each group of 3 is the correct answer
  const correctAnswers = answers.filter((_, index) => index % 3 === 0);

  const handleOptionChange = (questionIndex: number, answer: string) => {
    const updated = [...selectedAnswers];
    updated[questionIndex] = answer;
    setSelectedAnswers(updated);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRetry = () => {
    setSelectedAnswers(new Array(questions.length).fill(null));
    setSubmitted(false);
  };

  return (
    <div className="pb-5">
      <h2 className="h4 fw-bold">
        ✅ Checkpoint! 
      </h2>

      <ol className="checkpoint-list">
        {questions.map((question, index) => {
          const startIdx = index * 3;
          const options = answers.slice(startIdx, startIdx + 3);
          const selected = selectedAnswers[index];
          const isCorrect = selected === correctAnswers[index];

          return (
            <li key={index} className="question-item">
              {question}
              <ul className="answer-list">
                {options.map((option, i) => (
                  <li
                    key={i}
                    className={`answer-item ${
                      submitted && selected === option
                        ? isCorrect
                          ? "correct"
                          : "incorrect"
                        : ""
                    }`}
                  >
                    <label className="answer-label">
                      <input
                        type="radio"
                        name={`question${index}`}
                        value={option}
                        checked={selected === option}
                        onChange={() => handleOptionChange(index, option)}
                        disabled={submitted}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              {submitted && (
                <p className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
                  {isCorrect
                    ? "✅ Correct!"
                    : `❌ Incorrect. Correct answer: ${correctAnswers[index]}`}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {!submitted ? (
        <button onClick={handleSubmit} className="submit-button btn btn-success">
          Submit Answers
        </button>
      ) : (
        <button onClick={handleRetry} className="submit-button btn btn-primary">
          Retry Quiz
        </button>
      )}
    </div>
  );
}
