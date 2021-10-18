import React from 'react';
import styled from 'styled-components';

const Task = styled.div`
    padding: 5px;
    border-bottom: 1px solid #f4f4f4;
`;

const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    font-size: 12px;
    vertical-align: middle;
`;

const Input = styled.input`
    width: 50%;
    border: none;
    text-decoration: ${(props) =>
        props.dataChecked ? 'line-through' : 'none'};
`;

const Button = styled.button`
    margin-left: 1%;
    height: 25px;
    width: 70px;
    margin-left: 1%;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    color: #222;
    text-transform: uppercase;
    font-size: 12px;
`;

const Tasks = (props) => {
    const { tasks, handleCheckTask, handleModifyTask, handleDeleteTask } =
        props;
    return (
        <>
            {tasks.map((task, idx) => (
                <Task key={idx}>
                    <Checkbox
                        type='checkbox'
                        id={`task${idx}`}
                        checked={task.isChecked}
                        onChange={() => handleCheckTask(idx)}
                    />
                    <Input
                        value={task.text}
                        dataChecked={task.isChecked}
                        readOnly
                    />
                    <Button onClick={() => handleModifyTask(task, idx)}>
                        Modify
                    </Button>
                    <Button onClick={() => handleDeleteTask(idx)}>
                        Delete
                    </Button>
                </Task>
            ))}
        </>
    );
};

export default Tasks;
