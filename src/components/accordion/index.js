import React, { useState } from "react";
import data from "./data.js";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState("");
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelect = (currentItem) => {
    setSelected(selected === currentItem ? "" : currentItem);
  };

  const handleMultiSelect = (currentItem) => {
    setMultiSelected((prevSelected) =>
      prevSelected.includes(currentItem)
        ? prevSelected.filter((item) => item !== currentItem)
        : [...prevSelected, currentItem]
    );
  };

  const handleSelection = (currentItem) => {
    isMultiSelect
      ? handleMultiSelect(currentItem)
      : handleSingleSelect(currentItem);
  };

  const enableSelectionMode = () => {
    setIsMultiSelect(!isMultiSelect);
    if (isMultiSelect === false) {
      setMultiSelected([]);
      setSelected("");
    }
  };
  return (
    <div className="wrapper">
      <header className="app-header">Accordion App</header>
      <button
        onClick={enableSelectionMode}
        style={{ backgroundColor: isMultiSelect ? "green" : "red" }}
      >
        {isMultiSelect ? "ON" : "OFF"} Multi Selection
      </button>

      <div className="accordion">
        {data.map((dataItem) => (
          <div key={dataItem.id} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => handleSelection(dataItem.id)}
            >
              <h3 className="accordion-title">{dataItem.question}</h3>
              <div className="accordion-icon"> + </div>
            </div>
            {(isMultiSelect && multiSelected.includes(dataItem.id)) ||
            (!isMultiSelect && selected === dataItem.id) ? (
              <div className="content">{dataItem.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
