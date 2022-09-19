import React from "react";

const Todos = () => {
  return (
    <div className="flex-container">
      <div className="todo-item">
        <li></li>
        <i className="fa-solid fa-trash del-btn"></i>
      </div>
      <div className="done-btn">
        <button className="complete-btn" type="submit">
          Done
        </button>
      </div>
    </div>
  );
};

export default Todos;
