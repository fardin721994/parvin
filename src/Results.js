import "./Results.css";
const emotions = [
  "anger",
  "disgust",
  "fear",
  "happiness",
  "sadness",
  "surprise",
];
const emojis = ["😡", "🤢", "😨", "😀", "😞", "😮"];
function Results({ answers }) {
  let data = emotions.map((emotion, index) => ({
    emotion,
    emoji: emojis[index],
    correct: 0,
    wrong: 0,
    missed: 0,
  }));
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === true) data[i % 6].correct++;
    else if (answers[i] === false) data[i % 6].wrong++;
    else data[i % 6].missed++;
  }
  const numberOfInAnswers = (value) => {
    const array = answers.filter((answer) => answer === value);
    return array.length;
  };
  let sum = {
    correct: numberOfInAnswers(true),
    wrong: numberOfInAnswers(false),
    missed: numberOfInAnswers(null),
  };

  return (
    <div dir="ltr" className="results">
      <section>
        <p>Results aggregate:</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>✔</th>
              <th>❌</th>
              <th>➖</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>aggregate</td>
              <td>{sum.correct}</td>
              <td>{sum.wrong}</td>
              <td>{sum.missed}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <p>Results seperated by each emotion:</p>
        <table>
          <thead>
            <tr>
              <th>emotion</th>
              <th>✔</th>
              <th>❌</th>
              <th>➖</th>
            </tr>
          </thead>

          <tbody>
            {data.map(({ emotion, emoji, correct, wrong, missed }) => (
              <tr key={emotion}>
                <td>
                  {emotion} {emoji}
                </td>
                <td>{correct}</td>
                <td>{wrong}</td>
                <td>{missed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <p>Results by each question:</p>
        <table>
          <thead>
            <tr>
              <th>Q</th>
              <th>A</th>
            </tr>
          </thead>
          <tbody>
            {answers.map((answer, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{`${
                  answer === true ? "✔" : answer === false ? "❌" : "➖"
                }`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
export default Results;
