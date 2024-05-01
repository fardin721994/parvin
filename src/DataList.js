import axios from "axios";
import React, { useState } from "react";
import "./DataList.scss";
import DataListItem from "./DataListItem";
import Filter from "./Filter";

function DataList({ data, setData }) {
  const [filteredData, setFilteredData] = useState(data);
  const [showFilters, setShowFilters] = useState(false);
  const handleRemoveData = async (id) => {
    const storedAdminData = JSON.parse(localStorage.getItem("adminData"));
    try {
      const res = await axios.delete(
        process.env.REACT_APP_BACKEND_URL + `/results/${id}`,
        { headers: { Authorization: `Bearer ${storedAdminData.token}` } }
      );

      const newData = data.filter((item) => item.id !== id);
      setData(newData);
    } catch (error) {
      console.log("Sth went wrong with deleting data:", error);
    }
  };

  return (
    <div className="DataList">
      <header>
        <h2>{`${filteredData.length} نتیجه یافت شد`}</h2>
        <button
          onClick={() => setShowFilters((previous) => !previous)}
        ></button>
      </header>
      <Filter
        data={data}
        setFilteredData={setFilteredData}
        className={`${showFilters ? "show" : "hidden"}`}
      />
      <ul className="list">
        {filteredData.map((item, index) => (
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
    </div>
  );
}

export default DataList;
