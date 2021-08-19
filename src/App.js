import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import InputBox from "./components/InputBox";

const App = () => {
  const [titles, setTitles] = useState(["aaaaaaa"]);

  const addTask = () => {
    setTitles([...titles, "aaaa"]);
  };

  return (
    <div className="App">
      {titles.map((title, idx) => (
        <Tasks key={idx} title={title} />
      ))}
      <InputBox addTask={addTask} />
    </div>
  );
};

export default App;
