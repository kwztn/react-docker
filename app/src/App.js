import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!task) return;
    const newItem = { id: Math.random(), value: task };
    setItems(oldList => [...oldList, newItem]);
    setTask("");
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <div className="card">
        <h1>To do list</h1>
        <div className="input-row">
          <input
            type="text"
            placeholder="New objective..."
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button onClick={addItem}>Execute</button>
        </div>
        <ul>
          {items.map(item => (
            <li key={item.id} className="task-item">
              {item.value}
              <button className="del-btn" onClick={() => deleteItem(item.id)}>×</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;