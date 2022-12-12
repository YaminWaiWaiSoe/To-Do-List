import React, { useState } from "react";
import List from "./List";
import ListSelector from "./ListSelector";
import { getStorage, setStorage } from "../utils/storage";
import "bootstrap/dist/css/bootstrap.css";
import InputBox from "./InputBox";

function ToDoList() {
  const [task, setTask] = useState("");
  const [type, setType] = useState("All");
  const [items, setItems] = useState(getStorage() === null ? [] : getStorage());

  const handleSubmit = (e) => {
    e.preventDefault();

    const idCount = items === [] ? 0 : Object.keys(items).length;

    setStorage([...items, { id: idCount + 1, value: task, checked: false }]);

    setItems([...items, { id: idCount + 1, value: task, checked: false }]);

    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const showList = (radioValue) => {
    setType(radioValue);
  };

  const handleTaskChange = (event) => {
    const updateItems = items.map((i) => {
      if (i.id == event.target.id) {
        return {
          id: parseInt(event.target.id),
          value: event.target.value,
          checked: i.checked ? false : true,
        };
      }
      return i;
    });
    setStorage(updateItems);
    setItems(updateItems);
  };

  const handleSelectAll = () => {
    const flag =
      items.filter((item) => item.checked === false).length === 0
        ? false
        : true;
    const updateItems = items.map((i) => {
      return {
        ...i,
        checked: flag,
      };
    });
    setStorage(updateItems);
    setItems(updateItems);
  };

  const handleDeleteAll = () => {
    setStorage([]);
    setItems([]);
  };

  return (
    <div className="container" style={{ width: "50%" }}>
      <h4>ToDo List</h4>
      <div className="card" style={{ width: "60%" }}>
        <div className="card-body">
          <InputBox
            handleChange={handleChange}
            handleEnter={handleEnter}
            handleSubmit={handleSubmit}
            task={task}
          />
          <List items={items} type={type} handleTaskChange={handleTaskChange} />
        </div>
        <div className="card-footer">
          <ListSelector
            showList={showList}
            handleSelectAll={handleSelectAll}
            handleDeleteAll={handleDeleteAll}
          />
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
