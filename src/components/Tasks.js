import React from "react";
import styled from "styled-components";

const Task = styled.div``;

const Checkbox = styled.input``;

const Input = styled.input`
  width: 50%;
  border: none;
  text-decoration: ${(props) => (props.dataChecked ? "line-through" : "none")};
`;

const Button = styled.button``;

const Tasks = (props) => {
  const { tasks, handleCheckTask } = props;
  return (
    <>
      {tasks.map((task, idx) => (
        <Task key={idx}>
          <Checkbox
            type="checkbox"
            id={`task${idx}`}
            checked={task.isChecked}
            onChange={() => handleCheckTask(task, idx)}
          />
          <Input value={task.text} dataChecked={task.isChecked} readOnly />
          <Button>Modify</Button>
          <Button>Delete</Button>
        </Task>
      ))}
    </>
  );
};

export default Tasks;
