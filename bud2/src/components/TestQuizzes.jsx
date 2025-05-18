import { useState } from 'react';

const quizzes = [
  {
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
    answer: 0,
  },
  {
    question: 'Which language runs in a web browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    answer: 3,
  }
];

export default function TestQuizzes() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected === quizzes[current].answer) setScore(score + 1);
    setSubmitted(true);
  };

  const handleNext = () => {
    setSelected(null);
    setSubmitted(false);
    setCurrent(current + 1);
  };

  return (
    <div className="quiz-box">
      {current < quizzes.length ? (
        <>
          <h3>{quizzes[current].question}</h3>
          {quizzes[current].options.map((opt, idx) => (
            <div key={idx}>
              <input
                type="radio"
                name="option"
                value={idx}
                checked={selected === idx}
                onChange={() => setSelected(idx)}
                disabled={submitted}
              />
              <label>{opt}</label>
            </div>
          ))}
          {!submitted ? (
            <button onClick={handleSubmit} disabled={selected === null}>Submit</button>
          ) : (
            <button onClick={handleNext}>Next</button>
          )}
        </>
      ) : (
        <p>Your score: {score} / {quizzes.length}</p>
      )}
    </div>
  );
}