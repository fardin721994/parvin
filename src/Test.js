import { useState, useEffect } from "react";
import "./Test.css";
import Results from "./Results";
import Waiting from "./Waiting";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";

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
// const options = [
//   { feeling: "شاد 😀", id: "happiness" },
//   { feeling: "غمگین 😞", id: "sadness" },
//   { feeling: "متعجب 😮", id: "surprise" },
//   { feeling: "عصبانی 😡", id: "anger" },
//   { feeling: "ترسیده 😨", id: "fear" },
//   { feeling: "چندش 🤢", id: "disgust" },
// ];
const options = [
  { feeling: "شاد", id: "happiness" },
  { feeling: "غمگین", id: "sadness" },
  { feeling: "متعجب", id: "surprise" },
  { feeling: "عصبانی", id: "anger" },
  { feeling: "ترسیده", id: "fear" },
  { feeling: "چندش", id: "disgust" },
];
const waitingTime = 1000; // The time gap between qustions
const answerTime = 600000; // The time to answer a question

// This function will shuffle any given array:
const shuffleArray = (array) => array.sort((a, b) => 0.5 - Math.random());
// Shuffled array of [1,2,3, ... , 60] :
let shuffledArray1to60 = [];
for (let i = 0; i < 10; i++) {
  const newArray = Array.from({ length: 6 }, (_, j) => i * 6 + j + 1);
  shuffledArray1to60 = [...shuffledArray1to60, ...shuffleArray(newArray)];
}
/////////
function Test({ profile }) {
  const [index, setIndex] = useState(0); // this index will increment one by one from 0 to 59
  const [waiting, setWaiting] = useState(false); // are we in the gap between questions or not(are we waiting for the next question).
  const [selectedOption, setSelectedOption] = useState(null);
  const [results, setResults] = useState(null);
  const testType = useParams().type;
  const [image, setImage] = useState(
    <img
      src={require(`./images/${testType}/${shuffledArray1to60[0]}.jpg`)}
      onLoad={() => setImageIsLoading(false)}
    />
  );

  const [imageIsLoading, setImageIsLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [next, setNext] = useState(false);

  ////////
  const numberOfQuestions = testType === "sample" ? 6 : 60;
  // This array will include 60 items and each item will be true, false or null, corresponding to correct answer, wrong answer or not answered respectively:
  const [answers, setAnswers] = useState(Array(numberOfQuestions).fill(null));

  ////////////
  const imageNumber = shuffledArray1to60[index];
  const correctAnswer = emotions[(imageNumber - 1) % 6];
  if (index === numberOfQuestions && !finished) setFinished(true);
  /////////////
  useEffect(
    function () {
      if (next) {
        !waiting && !finished && setIndex((previousIndex) => previousIndex + 1);
        if (!waiting && index + 1 < numberOfQuestions) {
          const imageNum = shuffledArray1to60[index + 1];
          const nextImage = (
            <img
              src={require(`./images/${testType}/${imageNum}.jpg`)}
              onLoad={() => setImageIsLoading(false)}
            />
          );
          setImage(nextImage);
          setImageIsLoading(true);
          setNext(false);
        }
        if (!finished) setWaiting((previous) => !previous);
        else setResults(answers);
      }
      if (!imageIsLoading && !next) {
        const timeValue = waiting ? waitingTime : answerTime;
        if (waiting) setSelectedOption(null);

        const timeout = setTimeout(() => {
          !waiting &&
            !finished &&
            setIndex((previousIndex) => previousIndex + 1);
          if (!waiting && index + 1 < numberOfQuestions) {
            const imageNum = shuffledArray1to60[index + 1];
            const nextImage = (
              <img
                src={require(`./images/${testType}/${imageNum}.jpg`)}
                onLoad={() => setImageIsLoading(false)}
              />
            );
            setImage(nextImage);
            setImageIsLoading(true);
          }
          if (!finished) setWaiting((previous) => !previous);
          else setResults(answers);
        }, timeValue);
        return function () {
          clearTimeout(timeout);
        };
      }
    },
    [waiting, imageIsLoading, next]
  );
  ///////////

  //////////
  const handleSelectOption = (optionId) => {
    setSelectedOption(optionId);
    const newAnswer = optionId === correctAnswer ? true : false;
    setAnswers((previousAnswers) =>
      previousAnswers.map((item, index) =>
        index === imageNumber - 1 ? newAnswer : item
      )
    );
  };

  /////////////

  return (
    <div className="Test" dir="rtl">
      {finished ? (
        <Results answers={answers} profile={profile} />
      ) : (
        <div className="main">
          {image}
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
          <div className="navigation">
            <button onClick={() => setNext((pre) => !pre)}> بعدی</button>
          </div>

          <Waiting display={(imageIsLoading || waiting).toString()} />
        </div>
      )}
    </div>
  );
}
export default Test;
