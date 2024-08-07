import React, { useState } from "react";
import QuestionList from "./QuestionList.js";

function Quiz() {
  const questions = [
    {
      Question: "What is the capital of France ?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris",
    },
    {
      Question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Jane Austen"],
      correctAnswer: "Harper Lee",
    },
    {
      Question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      correctAnswer: "Jupiter",
    },
    {
      Question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
      correctAnswer: "Oxygen",
    },
    {
      Question: "Who painted the Mona Lisa?",
      options: [
        "Vincent Van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
  ];

  const [currentQuesIndex, setQuesIndex] = useState(0);
  const [currentAns, setCurrentAns] = useState(null);
  const [score ,setScore] = useState(0);
  const handleClick = (op) => {
    setCurrentAns(op);
    if(op === questions[currentQuesIndex].correctAnswer)
    {
        setScore(score+1)
    }
  };
  const handleInc =()=>{
    setQuesIndex(currentQuesIndex+1)
    setCurrentAns(null)
  }
  
  return (
    <div>
      <h1>{currentQuesIndex < questions.length ? <h1>Question no {currentQuesIndex+1}</h1> : ""}</h1>

     
    {currentQuesIndex < questions.length ?   <div>
        <QuestionList
          questions={questions[currentQuesIndex].Question}
          options={questions[currentQuesIndex].options}
          handleClick={handleClick}
          currentAns={currentAns}
        ></QuestionList>

        <button disabled={currentAns == null} className={currentAns == null ? 'button-disabled' : 'button' } onClick={handleInc}>Next Question</button>
      </div> : <h1>
        Your Score is ::  {score} 
        </h1>}
   
    </div>
  );
}

export default Quiz;
