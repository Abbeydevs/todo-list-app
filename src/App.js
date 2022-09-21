import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  //This function is called when we get values from our input field
  const [inputText, setInputText] = useState("");

  //This function is called when we submit our input value
  const [todos, setTodos] = useState([]);


  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
