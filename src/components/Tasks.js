import React from "react";
import styled from "styled-components";

const Task = styled.div``;

const Label = styled.label``;

const Check = styled.input``;

const Tasks = (props) => {
  const { task } = props;
  return (
    <>
      <Task>
        <Label type="text">
          <Check type="checkbox" />
          {task}
        </Label>
      </Task>
    </>
  );
};

export default Tasks;
