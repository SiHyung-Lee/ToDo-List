import React, { useState } from "react";
import styled from "styled-components";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";

const Header = styled.header``;

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (value) => {
    setTasks([...tasks, { text: value, done: false }]);
    console.log("add");
  };

  const handleCheckTask = (task, id) => {
    console.log(task, id);

    setTasks(
      tasks.map((item) =>
        item.text === task.text ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="App">
      <Header>ToDo List</Header>
      <CreateTask handleAddTask={handleAddTask} />
      <Tasks tasks={tasks} handleCheckTask={handleCheckTask} />
    </div>
  );
};

export default App;
