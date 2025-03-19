import { useState } from "react";

const Checkpoint = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleSelect = (question: string, answer: string) => {
    setAnswers({ ...answers, [question]: answer });
  };

  return (
    <div className="checkpoint">
      <h3>Checkpoint!</h3>
      <ol>
        <li>
          What happened after Jesus Christ and His apostles died?
          <ul>
            {["a) The world became more peaceful", "b) Some of Christ’s teachings were lost or changed", "c) Everyone followed the same religion"].map((option, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>
        </li>
        <li>
          Why did Joseph Smith pray in 1820?
          <ul>
            {["a) He wanted to know which church to join", "b) He was asking for good weather", "c) He was writing a book"].map((option, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>
        </li>
        <li>
          Who appeared to Joseph Smith in the First Vision?
          <ul>
            {["a) An angel", "b) God the Father and Jesus Christ", "c) Moses and Elijah"].map((option, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Checkpoint;
