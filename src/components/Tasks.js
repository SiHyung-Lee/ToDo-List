import React from "react";
import styled from "styled-components";

const Task = styled.div``;

const Title = styled.input``;

const Check = styled.input``;

const Delete = styled.button``;

const Modify = styled.button``;

const Tasks = (props) => {
  const { title } = props;
  return (
    <>
      <Task>
        <Check type="checkbox" />
        <Title type="text" value={title} />
        <Modify>Modify</Modify>
        <Delete>Delete</Delete>
      </Task>
    </>
  );
};

export default Tasks;
