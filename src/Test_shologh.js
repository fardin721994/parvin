import { useState, useEffect } from "react";
import "./Test.css";

const emotions = [
  "anger",
  "disgust",
  "fear",
  "happiness",
  "sadness",
  "surprise",
];
const options = [
  { feeling: "شاد", id: "happiness" },
  { feeling: "غمگین", id: "sadness" },
  { feeling: "متعجب", id: "surprise" },
  { feeling: "عصبانی", id: "anger" },
  { feeling: "ترسیده", id: "fear" },
  { feeling: "چندش آور", id: "disgust" },
];
const shuffleArray = (array) => array.sort((a, b) => 0.5 - Math.random());
let shuffledArray1to60 = [];
for (let i = 0; i < 10; i++) {
  const newArray = Array.from({ length: 6 }, (_, j) => i * 6 + j + 1);
  shuffledArray1to60 = [...shuffledArray1to60, ...shuffleArray(newArray)];
}
//////////
const waitingTime = 2000;
////////////
const answerTime = 6000;

/////////
let answers = [];
/////////
function Test() {
  const [index, setIndex] = useState(0);
  const [waiting, setWaiting] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  ////////////
  const imageNumber = shuffledArray1to60[index];
  const correctAnswer = emotions[(imageNumber % 6) - 1];
  console.log("correctAnswer", correctAnswer);
  //////////
  // console.log("selectedOption : ", selectedOption);
  // const setClassName = (optionId) => {
  //   let className = "";
  //   if (optionId === selectedOption && optionId === data[index - 1])
  //     className = "selected correct";
  //   if (optionId === selectedOption && optionId !== data[index - 1])
  //     className = "selected wrong";
  //   if (
  //     selectedOption &&
  //     optionId !== selectedOption &&
  //     optionId === data[index - 1]
  //   )
  //     className = "correct";
  //   return className;
  // };
  /////////////
  useEffect(
    function () {
      const timeValue = waiting ? waitingTime : answerTime;
      if (waiting) setSelectedOption(null);
      const timeout = setTimeout(() => {
        console.log("waiting : ", waiting);
        if (index < 5) setWaiting((previous) => !previous);
        else console.log("answers: ", answers);

        setIndex((previous) => previous + 1);
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
      {waiting ? (
        <div> waiting</div>
      ) : (
        <div>
          <img src={require(`../public/images/${imageNumber}.jpg`)} />
          <div className="QA">
            <h3>شخص چه حالتی دارد؟</h3>
            <div className="options">
              {options.map((item) => (
                <button
                  key={item.id}
                  id={item.id}
                  onClick={() => handleSelectOption(item.id)}
                  className={item.id === selectedOption ? "selected" : ""}
                  disabled={selectedOption}
                >
                  {item.feeling}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <div className="nav">
        <button
          onClick={() => {
            setIndex((previousIndex) => previousIndex - 1);
            setSelectedOption(null);
          }}
          disabled={index === 1 ? true : false}
        >
          قبلی
        </button>
        <button
          onClick={() => {
            setIndex((previousIndex) => previousIndex + 1);
            setSelectedOption(null);
          }}
          disabled={index === data.length ? true : false}
        >
          بعدی
        </button>
      </div> */}
    </div>
  );
}
export default Test;
