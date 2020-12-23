import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo, index }) => {
  return <div className="todo">{todo.text}</div>;
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Write Blog Post ",
      isCompleted: false,
    },
    {
      text: "Buy Krystle's christmas gift",
      isCompleted: false,
    },
    {
      text: "Update Resume",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
