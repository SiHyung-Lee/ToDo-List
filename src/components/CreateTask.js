import React, { useState } from "react";
import styled from "styled-components";
import Tasks from "./Tasks";

const Container = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

function CreateTask() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addTask = (value) => {
    setTasks([...tasks, value]);
    setValue("");
  };

  return (
    <>
      <Container>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter a todo"
        />
        <Button onClick={() => addTask(value)}>Submit</Button>
      </Container>
      {tasks.map((task, idx) => (
        <Tasks key={idx} task={task} />
      ))}
    </>
  );
}

export default CreateTask;
