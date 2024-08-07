import React from "react";
import './QuestionList.css';

function QuestionList({ questions, options, handleClick,currentAns }) {
  return (
    <div className="question-container">
      <h2>{questions}</h2>
      <div className="options-container">
        <ul>
          {options.map((op, index) => {
            return <li key={index} onClick={()=>handleClick(op)} className={currentAns === op ? 'selected' : ''}>{op}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default QuestionList;
