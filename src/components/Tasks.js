import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    border-bottom: 1px solid #f4f4f4;
`;

const Inputs = styled.div`
    width: 100%;
`;

const Checkbox = styled.input`
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    font-size: 12px;
    vertical-align: middle;
`;

const Input = styled.input`
    width: calc(100% - 27px);
    padding: 0 10px;
    border: none;
    text-decoration: ${props => (props.dataChecked ? 'line-through' : 'none')};
    box-sizing: border-box;
`;

const Buttons = styled.div`
    display: flex;
`;

const Button = styled.button`
    height: 25px;
    width: 30px;
    margin-left: 1%;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    color: #222;
    text-transform: uppercase;
    font-size: 9px;
`;

const IconMpdify = <FontAwesomeIcon icon={faPen} />;
const IconDelete = <FontAwesomeIcon icon={faTrash} />;

const Tasks = props => {
    const { tasks, handleCheckTask, handleModifyTask, handleDeleteTask } =
        props;
    return (
        <>
            {tasks.map((task, idx) => (
                <Task key={idx} id={`task${idx}`}>
                    <Inputs>
                        <Checkbox
                            type="checkbox"
                            checked={task.isChecked}
                            onChange={() => handleCheckTask(idx)}
                        />
                        <Input
                            type="text"
                            value={task.text}
                            dataChecked={task.isChecked}
                            readOnly
                        />
                    </Inputs>
                    <Buttons>
                        <Button onClick={() => handleModifyTask(idx)}>
                            {IconMpdify}
                        </Button>
                        <Button onClick={() => handleDeleteTask(idx)}>
                            {IconDelete}
                        </Button>
                    </Buttons>
                </Task>
            ))}
        </>
    );
};

export default Tasks;
