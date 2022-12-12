import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <Fragment>
      <ToDoList />
    </Fragment>
  );
}

export default App;
