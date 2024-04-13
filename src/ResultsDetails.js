import React from "react";
import Results from "./Results";
import { useParams } from "react-router-dom";

function ResultsDetails({ data }) {
  const { id } = useParams();
  const { profile, results } = data.find((item) => item.id === id)._doc;

  return <Results profile={profile} answers={results.byEachQuestion} />;
}

export default ResultsDetails;
