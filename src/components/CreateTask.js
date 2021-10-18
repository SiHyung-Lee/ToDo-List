import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    margin-bottom: 5%;
    background-color: #f2f2f2;
    padding: 3% 5%;
`;

const Input = styled.input`
    border: 1px solid #e5e5e5;
    width: calc(99% - 70px);
    height: 40px;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 14px;
`;

const Button = styled.button`
    height: 40px;
    width: 70px;
    margin-left: 1%;
    border: none;
    background-color: #1e87f0;
    color: #fff;
    text-transform: uppercase;
    vertical-align: top;
`;

function CreateTask({ handleAddTask }) {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddTask(value);
        setValue('');
        inputRef.current.focus();
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    value={value}
                    onChange={handleChange}
                    placeholder='Enter a todo'
                    ref={inputRef}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </>
    );
}

export default CreateTask;
