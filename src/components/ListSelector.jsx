import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

function ListSelector({ showList, handleSelectAll, handleDeleteAll }) {
  const [selectedOption, setSelectedOption] = useState("All");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    showList(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-9">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            checked={selectedOption === "All"}
            value="All"
            onChange={handleOptionChange}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            All
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            checked={selectedOption === "To Do"}
            value="To Do"
            onChange={handleOptionChange}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            To Do
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
            checked={selectedOption === "Done"}
            value="Done"
            onChange={handleOptionChange}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio3">
            Done
          </label>
        </div>
      </div>
      <div className="col-3">
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleSelectAll}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleDeleteAll}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListSelector;
