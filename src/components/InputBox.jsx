import React from "react";
function InputBox({ handleChange, handleEnter, task, handleSubmit }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add Task"
        onChange={handleChange}
        onKeyPress={handleEnter}
        value={task}
      />
      <div className="input-group-append">
        <form onSubmit={handleSubmit}>
          <button className="btn btn-primary">+</button>
        </form>
      </div>
    </div>
  );
}

export default InputBox;
