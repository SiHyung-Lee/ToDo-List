import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const TaskList = styled.section`
    padding: 0 20px;
`;

const Sorting = styled.h2`
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: #1a374d;
`;

const Task = styled.div`
    display: flex;
    padding: 5px 0;
    justify-content: space-between;
    border-bottom: 1px solid #f4f4f4;
`;

const Inputs = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const Checkbox = styled.input`
    border: 1px solid #ccc;
    margin: 0 5px 0 0;
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
        background-color: #406882;
        border-color: #406882;
    }
`;

const IconPen = <FontAwesomeIcon icon={faPen} />;
const IconTrash = <FontAwesomeIcon icon={faTrash} />;
const IconCheck = <FontAwesomeIcon icon={faCheck} style={{ color: '#fff' }} />;

const Tasks = props => {
    const [value, setValue] = useState('');

    const {
        tasks,
        handleCheckTask,
        handleModifyTask,
        handleDeleteTask,
        handleModifyConfirmTask,
    } = props;

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleFormatTask = (task, idx) => {
        return (
            <Task key={idx} id={`task${idx}`}>
                <Inputs>
                    <Checkbox
                        type="checkbox"
                        checked={task.done}
                        onChange={() => handleCheckTask(idx)}
                    />
                    <Input
                        type="text"
                        className="task"
                        value={task.text}
                        dataChecked={task.done}
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
                    <Button type="button" onClick={() => handleModifyTask(idx)}>
                        {IconPen}
                    </Button>
                    <Button type="button" onClick={() => handleDeleteTask(idx)}>
                        {IconTrash}
                    </Button>
                </Buttons>
            </Task>
        );
    };

    return (
        <>
            <TaskList>
                <Sorting>Inbox</Sorting>
                {tasks.map((task, idx) =>
                    !task.done ? handleFormatTask(task, idx) : '',
                )}
            </TaskList>
            <TaskList>
                <Sorting>Completed</Sorting>
                {tasks.map((task, idx) =>
                    task.done ? handleFormatTask(task, idx) : '',
                )}
            </TaskList>
        </>
    );
};

export default Tasks;
