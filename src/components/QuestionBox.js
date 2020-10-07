import React, { useState } from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  const [answerSelected, setAnswerSelected] = useState("unset");
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      <div className="answerBtnContainer">
        {answer.map((text, index) => (
          <button
            key={index}
            className="answerBtn"
            data-isselected={answerSelected}
            onClick={() => {
              setAnswer([text]);
              setAnswerSelected(selected(text));
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
