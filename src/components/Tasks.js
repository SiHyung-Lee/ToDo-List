import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Task = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    border-bottom: 1px solid #f4f4f4;
`;

const Inputs = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const Checkbox = styled.input`
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    margin: 0;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    margin-right: 10px;
    border: none;
    text-decoration: ${props => (props.dataChecked ? 'line-through' : 'none')};
    box-sizing: border-box;
    &.task__modify {
        display: none;
    }
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
    &.button__modify {
        display: none;
        background-color: rgb(30, 135, 240);
        border-color: rgb(30, 135, 240);
    }
`;

const IconPen = <FontAwesomeIcon icon={faPen} />;
const IconTrash = <FontAwesomeIcon icon={faTrash} />;
const IconCheck = <FontAwesomeIcon icon={faCheck} style={{ color: '#fff' }} />;

const Tasks = props => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
    };

    const {
        tasks,
        handleCheckTask,
        handleModifyTask,
        handleDeleteTask,
        handleModifyConfirmTask,
    } = props;

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
                            className="task"
                            value={task.text}
                            dataChecked={task.isChecked}
                            readOnly
                        />
                        <Input
                            type="text"
                            className="task__modify"
                            value={value}
                            onChange={handleChange}
                        />
                    </Inputs>
                    <Buttons>
                        <Button
                            type="button"
                            onClick={() => handleModifyConfirmTask(idx, value)}
                            className="button__modify"
                        >
                            {IconCheck}
                        </Button>
                        <Button
                            type="button"
                            onClick={() => handleModifyTask(idx)}
                        >
                            {IconPen}
                        </Button>
                        <Button
                            type="button"
                            onClick={() => handleDeleteTask(idx)}
                        >
                            {IconTrash}
                        </Button>
                    </Buttons>
                </Task>
            ))}
        </>
    );
};

export default Tasks;
