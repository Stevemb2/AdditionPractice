import React from "react";

export const Scoring = ({ correct, incorrect, setCorrect, setIncorrect }) => {
  const handleResetScore = (event) => {
    setCorrect((prevcorrect) => 0);
    setIncorrect((previncorrect) => 0);
  };

  return (
    <div>
      <span className="scoring">Correct Answers:</span>
      <span className="scoring">{correct}</span>
      <span className="scoring">Incorrect Answers:</span>
      <span className="scoring">{incorrect}</span>
      <span className="scoring">
        <button onClick={handleResetScore}>Reset Score</button>
      </span>
    </div>
  );
};
