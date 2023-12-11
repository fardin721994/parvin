import { useState, useEffect } from "react";
import "./Test.css";
import Results from "./Results";

// Every image is implying one of these emotions:
const emotions = [
  "anger",
  "disgust",
  "fear",
  "happiness",
  "sadness",
  "surprise",
];
const colors = [
  "#ffea6c",
  "#0c0d49",
  "#a0522d",
  "#e72222",
  "#332424",
  "#8ab852",
];
// the options in the test (possible answers):
const options = [
  { feeling: "شاد 😀", id: "happiness" },
  { feeling: "غمگین 😞", id: "sadness" },
  { feeling: "متعجب 😮", id: "surprise" },
  { feeling: "عصبانی 😡", id: "anger" },
  { feeling: "ترسیده 😨", id: "fear" },
  { feeling: "چندش 🤢", id: "disgust" },
];
const waitingTime = 500; // The time gap between qustions
const answerTime = 2000; // The time to answer a question
const numberOfQuestions = 6;
let answers = Array.from({ length: numberOfQuestions }, (_, i) => null); // This array will include 60 items and each item will be true, false or null, corresponding to correct answer, wrong answer or not answered respectively.
// This function will shuffle any given array:
const shuffleArray = (array) => array.sort((a, b) => 0.5 - Math.random());
// Shuffled array of [1,2,3, ... , 60] :
let shuffledArray1to60 = [];
for (let i = 0; i < 10; i++) {
  const newArray = Array.from({ length: 6 }, (_, j) => i * 6 + j + 1);
  shuffledArray1to60 = [...shuffledArray1to60, ...shuffleArray(newArray)];
}
let finished = false;
/////////
function Test() {
  const [index, setIndex] = useState(0); // this index will increment one by one from 0 to 59
  const [waiting, setWaiting] = useState(false); // are we in the gap between questions or not(are we waiting for the next question).
  const [selectedOption, setSelectedOption] = useState(null);
  const [results, setResults] = useState(null);

  ////////////
  const imageNumber = shuffledArray1to60[index];
  const correctAnswer = emotions[(imageNumber - 1) % 6];
  // console.log("correctAnswer", correctAnswer);
  // console.log("waiting : ", waiting);
  if (index === numberOfQuestions) finished = true;
  /////////////
  useEffect(
    function () {
      const timeValue = waiting ? waitingTime : answerTime;
      if (waiting) setSelectedOption(null);
      const timeout = setTimeout(() => {
        !waiting && setIndex((previous) => previous + 1);
        if (!finished) setWaiting((previous) => !previous);
        else setResults(answers);
      }, timeValue);

      return function () {
        clearTimeout(timeout);
      };
    },
    [waiting]
  );

  //////////
  const handleSelectOption = (optionId) => {
    setSelectedOption(optionId);
    answers[imageNumber - 1] = optionId === correctAnswer ? true : false;
  };
  /////////////
  return (
    <div className="Test" dir="rtl">
      {finished ? (
        <Results answers={answers} />
      ) : waiting ? (
        <div> waiting</div>
      ) : (
        <div>
          <img src={require(`../public/images/${imageNumber}.jpg`)} />
          <div className="QA">
            <h3>شخص چه حسی دارد؟</h3>
            <div className="options">
              {options.map((item, index) => (
                <button
                  key={item.id}
                  id={item.id}
                  onClick={() => handleSelectOption(item.id)}
                  className={item.id === selectedOption ? "selected" : ""}
                  disabled={selectedOption}
                  style={{
                    background: `linear-gradient(to left, ${colors[index]}, 20%, snow)`,
                  }}
                >
                  {item.feeling}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Test;
