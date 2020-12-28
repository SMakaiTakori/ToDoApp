import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo }) => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const css = `
    .is-done {
        text-decoration: line-through;
    }
`;

  return (
    <>
      <li className={isActive ? "todo" : "todo is-done"} onClick={handleToggle}>
        {todo.item}
      </li>
      <style>{css}</style>
    </>
  );
};

const TodoForm = ({ addTodo, countUp, count }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    countUp();
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
      <p>
        {" "}
        {count} out of {count}
      </p>
    </>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
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

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} count={count} countDown={countDown} />
        ))}
        <TodoForm addTodo={addTodo} count={count} countUp={countUp} />
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
