import React, { useState } from "react";
import styled from "styled-components";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";
import "./App.css";

const Header = styled.header`
  font-size: 24px;
  padding: 10px 20px;
  background-color: #f2f2f2;
`;

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "study react", isChecked: false },
    { text: "setting css framework", isChecked: false },
    { text: "modify react portfolio", isChecked: false },
  ]);

  const handleAddTask = (value) => {
    if (value !== "") {
      setTasks([{ text: value, isChecked: false, readOnly: true }, ...tasks]);
    }
  };

  const handleDeleteTask = (idx) => {
    const result = tasks.filter((task, index) => index !== idx);
    setTasks(result);
  };

  const handleModifyTask = (idx) => {
    const thisTask = document.querySelector(`#task${idx}`);
    const thisTaskInput = thisTask.querySelector(".task__modify");
    const buttonModify = thisTask.querySelector(".button__modify");
    const thisTaskTitle = thisTask.querySelector(".task");

    thisTaskInput.value = thisTask.querySelector(".task").value;
    thisTaskInput.style.display = "inline-block";
    thisTaskInput.focus();

    buttonModify.style.display = "inline-block";
    thisTaskTitle.style.display = "none";
  };

  const handleModifyConfirmTask = (idx, value) => {
    const thisTask = document.querySelector(`#task${idx}`);
    const thisTaskInput = thisTask.querySelector(".task__modify");
    const buttonModify = thisTask.querySelector(".button__modify");
    const thisTaskTitle = thisTask.querySelector(".task");

    thisTaskInput.style.display = "none";
    buttonModify.style.display = "none";
    thisTaskTitle.style.display = "inline-block";

    setTasks(
      tasks.map((task, index) =>
        index === idx ? { text: value, isChecked: task.isChecked } : task
      )
    );
  };

  const handleCheckTask = (idx) => {
    setTasks(
      tasks.map((task, index) =>
        index === idx ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return (
    <div className="App">
      <Header>ToDo List</Header>
      <CreateTask handleAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
        handleCheckTask={handleCheckTask}
        handleDeleteTask={handleDeleteTask}
        handleModifyTask={handleModifyTask}
        handleModifyConfirmTask={handleModifyConfirmTask}
      />
    </div>
  );
};

export default App;
