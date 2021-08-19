import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

function InputBox(props) {
  const { addTask } = props;
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <Container>
        <Input value={title} onChange={handleChange} />
        <Button onClick={addTask}>Submit</Button>
      </Container>
    </>
  );
}

export default InputBox;
