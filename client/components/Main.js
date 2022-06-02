import React, { useState, useEffect } from "react";
import { Instructions } from "./Instructions";
import { Scoring } from "./Scoring";
import { getCorrectAnswer } from "../services/getCorrectAnswer";
import { generateInputs } from "../utilities/generateInputs";
import "../../public/stylesheets/App.css";

const Main = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    const { input1, input2 } = generateInputs();
    setInput1(input1);
    setInput2(input2);
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const { correctAnswer, err } = await getCorrectAnswer(input1, input2);

      if (correctAnswer) {
        if (answer.trim() === "") {
          setMessage(`Must enter a valid number`);
          setIsSuccessful(false);
        } else if (isNaN(+answer)) {
          setMessage(`Must enter a valid number`);
          setIsSuccessful(false);
        } else if (+answer === correctAnswer) {
          setMessage(`Great ${answer} is the correct answer!`);
          setIsSuccessful(true);
          setCorrect((prevcorrect) => prevcorrect + 1);
        } else {
          setMessage(`Sorry ${answer} is an incorrect answer`);
          setIsSuccessful(false);
          setIncorrect((previncorrect) => previncorrect + 1);
        }
      } else {
        setMessage(err);
      }
    } catch (err) {
      setMessage(err);
      setIsSuccessful(false);
    }
  };

  const newQuestionHandler = (event) => {
    event.preventDefault();

    const { input1, input2 } = generateInputs();
    setInput1(input1);
    setInput2(input2);
    setAnswer("");
    setMessage("");
    setIsSuccessful(false);
  };

  const clearHandler = () => {
    setAnswer("");
    setMessage("");
    setIsSuccessful(false);
  };

  return (
    <div className="main">
      <h1>Addition Practice</h1>
      <Instructions />
      <br />
      <Scoring
        correct={correct}
        incorrect={incorrect}
        setCorrect={setCorrect}
        setIncorrect={setIncorrect}
      />
      <br />
      <form onSubmit={submitHandler}>
        <div className="expression">
          <span>{`${input1} + ${input2}`}</span>
          <span className="equals">=</span>
          <span className="input">
            <input
              className="input-field"
              type="text"
              placeholder="Answer"
              size="8"
              onChange={(event) => setAnswer(event.target.value)}
              onBlur={(event) => setAnswer(event.target.value)}
              onClick={clearHandler}
              value={answer}
            ></input>
          </span>
          <span className="button">
            <button type="submit">Submit</button>
          </span>
          <span className="button">
            <button onClick={newQuestionHandler}>New Question</button>
          </span>
        </div>
        <br />
        <div>
          {isSuccessful ? (
            <span className="message success">{message}</span>
          ) : (
            <span className="message failure">{message}</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Main;
