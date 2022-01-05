import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Form = styled.form`
    background-color: #6998ab;
    padding: 20px 20px;
`;

const Input = styled.input`
    border: 1px solid #6998ab;
    width: calc(99% - 70px);
    height: 40px;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #b1d0e0;
    color: #fff;
    &::placeholder {
        color: #fff;
    }
`;

const Button = styled.button`
    height: 40px;
    width: 70px;
    margin-left: 1%;
    border: none;
    background-color: #1a374d;
    color: #fff;
    text-transform: uppercase;
    vertical-align: top;
`;

const Icon = <FontAwesomeIcon icon={faFile} />;

function CreateTask({ handleAddTask }) {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleAddTask(value);
        setValue('');
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
                <Button type="submit">{Icon}</Button>
            </Form>
        </>
    );
}

export default CreateTask;
