import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DataList.scss";
function DataList() {
  const [data, setData] = useState([]);
  useEffect(function () {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "/results"
        );
        console.log(res.data);

        setData(res.data);
      } catch (error) {
        console.log("This error happened:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <ul className="DataList">
      {data.map((item) => (
        <li key={item.id} className="list-item">
          <ul>
            <li>{item._doc.profile.firstName}</li>
            <li>{item._doc.profile.lastName}</li>
            <li>{item._doc.profile.age}</li>
            <li>{`has answered ${item._doc.results.byEachQuestion.length} questions`}</li>
            <li>{`Correct Answers: ${item._doc.results.byAnswerStatus.correct}`}</li>
            <li>{`Wrong Answers: ${item._doc.results.byAnswerStatus.wrong}`}</li>
            <li>{`Skipped Answers: ${item._doc.results.byAnswerStatus.missed}`}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default DataList;
