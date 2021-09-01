import React from "react";
import styled from "styled-components";

const Task = styled.div``;

const Label = styled.label`
  text-decoration: none;
`;

const Check = styled.input``;

const Tasks = (props) => {
  const { tasks, handleCheckTask } = props;
  return (
    <>
      {tasks.map((task, idx) => (
        <Task key={idx}>
          <Label type="text">
            <Check
              type="checkbox"
              checked={task.done}
              onChange={() => handleCheckTask(task, idx)}
            />
            {task.text}
          </Label>
        </Task>
      ))}
    </>
  );
};

export default Tasks;
