
// this function will take 2 parameters, the first will be the questions (3 of them) as well as the answers to those questions ( 3 answers per question). It will assume that the
// correct answer will be the first answer for each of the question in the array, for example, in the answers array the first position [0] will be the correct answer for 
// the first question, and the position [3] will be the correct answer for the second question.
interface CheckpointProps {
    questions: Array<string>;
    answers: Array<string>;
}

export default function CheckpointComponent({ questions, answers }: CheckpointProps) {
    return (
        <div className="checkpoint">
            <h3>Checkpoint!</h3>
            <ol>
                {questions.map((question, index) => (
                    <li key={index}>
                        {question}
                        <ul style={{ listStyleType: "none" }}>
                            {answers.slice(index * 3, index * 3 + 3).map((option, i) => (
                                <li key={i}>
                                    <label>
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
        </div>
    );
}