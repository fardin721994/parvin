import { NavLink } from "react-router-dom";
import "./DataListItem.scss";
function DataListItem({ profile, results, id, handleRemoveData }) {
  const type = results.byEachQuestion.length === 60 ? "اصلی " : "نمونه ";
  return (
    <div className="DataListItem">
      <ul>
        <li>{profile.firstName}</li>
        <li>{profile.lastName}</li>
        <li>{`${profile.age} ساله`}</li>
        <li>{`در آزمون ${type} شرکت کرده اند.`}</li>
        <li>{`پاسخ های صحیح: ${results.byAnswerStatus.correct}`}</li>
        <li>{`پاسخ های غلط: ${results.byAnswerStatus.wrong}`}</li>
        <li>{`پاسخ نداده: ${results.byAnswerStatus.missed}`}</li>
      </ul>
      <button className="remove" onClick={handleRemoveData}>
        ❌
      </button>
      <NavLink className="more" to={`${id}`}>
        اطلاعات بیشتر
      </NavLink>
    </div>
  );
}

export default DataListItem;
