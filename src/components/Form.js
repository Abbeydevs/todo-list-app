import React from "react";
import "./Form.css";

const Form = ({ setInputText }) => {
  //Things I need to do here
  //Get Input value
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };



  return (
    <form>
      <div className="form-container">
        <div className="form-control textfield">
          <input onChange={inputTextHandler} type="text" name="todo-text" />
          <button className="add-btn" type="submit">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="select-container textfield">
          <select className="filter-todo">
            <option value="all">All</option>
            <option value="uncompleted">Uncompleted</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
