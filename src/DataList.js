import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DataList.scss";
import DataListItem from "./DataListItem";
function DataList({ data, setData }) {
  const handleRemoveData = async (id) => {
    try {
      const res = axios.delete(
        process.env.REACT_APP_BACKEND_URL + `/results/${id}`
      );
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
    } catch (error) {
      console.log("Sth went wrong with deleting data:", error);
    }
  };

  return (
    <ul className="DataList">
      {data.map((item, index) => (
        <li
          key={item.id}
          className="list-item"
          style={{
            backgroundColor: `${index % 2 === 0 ? "azure" : "cornsilk"}`,
          }}
        >
          <DataListItem
            profile={item._doc.profile}
            results={item._doc.results}
            id={item.id}
            handleRemoveData={() => handleRemoveData(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default DataList;
