import CheckpointComponent from "../CheckPointComponent";

export default function Lesson3() {
    // the questions and the answers are defined below, the first answer for each set of three is the correct answer. this is handled in the component,
    // there might be a better way to do this but this is easy and efficient.
    const questions: Array<string> = ['What is the first principle of the gospel?', 'Why do we need to repent?', 'What happens after baptism?'];
    const answers: Array<string> = [' Faith in Jesus Christ', 'Serving others', 'Reading scriptures', 'To be forgiven and become more like Christ', 
        'Because we will never make mistakes again', 'So we can avoid going to church', 'We receive the gift of the Holy Ghost',
        'We never have to repent again', 'We instantly become perfect'];

    return (
        <div className="lesson-content">
            <h2>What is the Gospel of Jesus Christ?</h2>
            <p>The gospel is the path God has provided for us to return to His presence and receive eternal life. 
                It is founded on faith in Jesus Christ and His atoning sacrifice, which makes it possible for us to be forgiven of our sins and become more like Him. 
                By following His gospel, we can experience joy and peace in this life and eternal happiness in the life to come.
                The Gospel is defined by the following four steps.
            </p>
            <h2>1. Faith in Jesus Christ</h2>

            <p>
            Faith in Jesus Christ means trusting Him and following His teachings. It is the first step toward receiving salvation and helps us make righteous choices.
            </p>
    
            <h2>2. Repentance</h2>
            <p>
            Repentance is turning away from sin and striving to become better through Jesus Christ. As we repent, we feel peace and joy, knowing we are forgiven.
            </p>

            <h2>3. Baptism and Receiving the Gift of the Holy Ghost</h2>
            <p>
            Baptism is a sacred ordinance where we make a covenant to follow Jesus Christ. After baptism, we receive the gift of the Holy Ghost, which guides, comforts, and strengthens us.
            </p>

            <h2>4. Enduring to the End</h2>
            <p>
            Living the gospel is a lifelong journey. We continue to strengthen our faith, repent when needed, and follow Jesus Christ every day. By enduring to the end, we prepare for eternal life with God.
            </p>       
            <CheckpointComponent questions={questions} answers={answers}></CheckpointComponent> 
        </div>
    );
}