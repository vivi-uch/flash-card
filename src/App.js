import { useState } from "react";

const QandA = [
  {
    id: 1,
    questions: "What is also used as react components memory?",
    answers: "States",
  },
  {
    id: 2,
    questions: "What are the two ways you can create a react project?",
    answers: "Vite and create-react-app",
  },
  {
    id: 3,
    questions:
      "What can be used instead of if-else and uses three operancs of condition ? true : fasle?",
    answers: "Tenary Operators",
  },
  {
    id: 4,
    questions:
      "What are one line function codes in place of function declaration?",
    answers: "Arrow function",
  },
  {
    id: 5,
    questions:
      "What javascript concept creates a new array by using and modifying the original array without mutating the array?",
    answers: "Map function",
  },
  {
    id: 6,
    questions: "How are javascript codes written in JSX?",
    answers: "In curly brackets, {}",
  },
];

export default function App() {
  const [selectedid, setSelectedid] = useState(null);

  function handleClick(id) {
    id !== selectedid ? setSelectedid(id) : setSelectedid(null);
  }

  return (
    <div className="flashcard">
      {QandA.map((quest) => (
        <div
          onClick={() => handleClick(quest.id)}
          className={`${
            quest.id === selectedid ? "selected" : "flashcard-div"
          }`}
        >
          <p>{quest.id === selectedid ? quest.answers : quest.questions}</p>
        </div>
      ))}
    </div>
  );
}
