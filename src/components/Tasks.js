import React from "react";
import styled from "styled-components";

const Task = styled.div``;

const Label = styled.label`
  text-decoration: ${(props) => (props.dataChecked ? "line-through" : "none")};
`;

const Checkbox = styled.input``;

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
          <Label
            type="text"
            htmlFor={`task${idx}`}
            dataChecked={task.isChecked}
          >
            {task.text}
          </Label>
        </Task>
      ))}
    </>
  );
};

export default Tasks;
