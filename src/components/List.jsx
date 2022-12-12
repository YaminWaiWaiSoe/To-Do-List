import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function List({ items, type, handleTaskChange }) {
  const toDoFilter = (items) => {
    return type === "To Do"
      ? items.filter((i) => i.checked === false)
      : type === "Done"
      ? items.filter((i) => i.checked === true)
      : items;
  };

  return (
    <ul className="list-group">
      {items &&
        toDoFilter(items).map((item) => (
          <li className="list-group-item" key={item.id}>
            <input
              className="form-check-input me-1"
              type="checkbox"
              value={item.value}
              id={item.id}
              checked={item.checked}
              onChange={handleTaskChange}
            ></input>
            <label
              className="form-check-label stretched-link"
              htmlFor={item.id}
              style={
                item.checked
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {item.value}
            </label>
          </li>
        ))}
    </ul>
  );
}

export default List;
