import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="container">
      <div className="todo-card">
        <h1>To-Do List</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul>
          {list.map((item, idx) => (
            <li key={idx}>
              {item}
              <button onClick={() => deleteTask(idx)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;