import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo, index }) => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <li className={isActive ? "todo" : "is-done"} onClick={handleToggle}>
        {todo.item}
      </li>

      <style></style>
    </>
  );
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          className="input"
          placeholder="Add Todo Item..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <button onClick={handleSubmit}> Add Todo </button>
    </>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      item: "Write Blog Post ",
      isCompleted: false,
    },
    {
      item: "Buy Krystle's christmas gift",
      isCompleted: false,
    },
    {
      item: "Update Resume",
      isCompleted: false,
    },
  ]);

  const addTodo = (item) => {
    const newTodos = [...todos, { item }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

// function solution(S) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const charMap = {};

//   S.split("").forEach((char) => {
//     if (charMap[char]) charMap[char]++;
//     else charMap[char] = 1;
//   });

//   for (let char in charMap) {
//     if (charMap[char] === 2) return char;
//   }
// }

export default App;
