import { useState } from "react";

const Checkpoint = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Correct Answers Mapping
  const correctAnswers: { [key: string]: string } = {
    question1: "b) Some of Christ’s teachings were lost or changed",
    question2: "a) He wanted to know which church to join",
    question3: "b) God the Father and Jesus Christ"
  };

  // Scripture-based Feedback for Incorrect Answers
  const scriptureFeedback: { [key: string]: { reference: string; text: string } } = {
    question1: { reference: "Amos 8:11-12", text: "Behold, the days come, saith the Lord God, that I will send a famine ... of hearing the words of the Lord." },
    question2: { reference: "James 1:5", text: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally..." },
    question3: { reference: "Doctrine and Covenants 13:1", text: "Upon you my fellow servants, in the name of Messiah, I confer the Priesthood of Aaron." }
  };

  // Handle answer selection
  const handleSelect = (question: string, answer: string) => {
    setAnswers({ ...answers, [question]: answer });
  };

  // Handle form submission
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="checkpoint">
      <h3>Checkpoint!</h3>
      <ol>
        <li>
          What happened after Jesus Christ and His apostles died?
          <ul>
            {["a) The world became more peaceful", "b) Some of Christ’s teachings were lost or changed", "c) Everyone followed the same religion"].map((option, index) => (
              <li key={index} className="answer-item">
                <label>
                  <input
                    type="radio"
                    name="question1"
                    value={option}
                    checked={answers["question1"] === option}
                    onChange={() => handleSelect("question1", option)}
                  />
                  {option}
                </label>
                {submitted && answers["question1"] === option && (
                  <span
                    className={answers["question1"] === correctAnswers["question1"] ? "correct" : "incorrect tooltip"}
                    data-tooltip={answers["question1"] !== correctAnswers["question1"] ? `${scriptureFeedback["question1"].reference}: "${scriptureFeedback["question1"].text}"` : ""}
                  >
                    {answers["question1"] === correctAnswers["question1"] ? " ✅ Correct!" : " ❌ Incorrect"}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </li>
        <li>
          Why did Joseph Smith pray in 1820?
          <ul>
            {["a) He wanted to know which church to join", "b) He was asking for good weather", "c) He was writing a book"].map((option, index) => (
              <li key={index} className="answer-item">
                <label>
                  <input
                    type="radio"
                    name="question2"
                    value={option}
                    checked={answers["question2"] === option}
                    onChange={() => handleSelect("question2", option)}
                  />
                  {option}
                </label>
                {submitted && answers["question2"] === option && (
                  <span
                    className={answers["question2"] === correctAnswers["question2"] ? "correct" : "incorrect tooltip"}
                    data-tooltip={answers["question2"] !== correctAnswers["question2"] ? `${scriptureFeedback["question2"].reference}: "${scriptureFeedback["question2"].text}"` : ""}
                  >
                    {answers["question2"] === correctAnswers["question2"] ? " ✅ Correct!" : " ❌ Incorrect"}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </li>
        <li>
          Who appeared to Joseph Smith in the First Vision?
          <ul>
            {["a) An angel", "b) God the Father and Jesus Christ", "c) Moses and Elijah"].map((option, index) => (
              <li key={index} className="answer-item">
                <label>
                  <input
                    type="radio"
                    name="question3"
                    value={option}
                    checked={answers["question3"] === option}
                    onChange={() => handleSelect("question3", option)}
                  />
                  {option}
                </label>
                {submitted && answers["question3"] === option && (
                  <span
                    className={answers["question3"] === correctAnswers["question3"] ? "correct" : "incorrect tooltip"}
                    data-tooltip={answers["question3"] !== correctAnswers["question3"] ? `${scriptureFeedback["question3"].reference}: "${scriptureFeedback["question3"].text}"` : ""}
                  >
                    {answers["question3"] === correctAnswers["question3"] ? " ✅ Correct!" : " ❌ Incorrect"}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </li>
      </ol>
      <button className="submit-btn" onClick={handleSubmit}>Submit Answers</button>
    </div>
  );
};

export default Checkpoint;
