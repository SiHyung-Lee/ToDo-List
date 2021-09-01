import React, { useState, useRef } from "react";
import styled from "styled-components";

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

function CreateTask({ handleAddTask }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask(value);
    setValue("");
    inputRef.current.focus();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter a todo"
          ref={inputRef}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default CreateTask;
