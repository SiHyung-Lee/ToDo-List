import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCloud } from '@fortawesome/free-solid-svg-icons';

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

const IconPen = <FontAwesomeIcon icon={faPen} />;
const IconTrash = <FontAwesomeIcon icon={faTrash} />;
const IconCloud = <FontAwesomeIcon icon={faCloud} />;

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
                            value={task.text}
                            dataChecked={task.isChecked}
                            readOnly
                        />
                        <Input
                            type="text"
                            value={value}
                            onChange={handleChange}
                        />
                    </Inputs>
                    <Buttons>
                        <Button
                            onClick={() => handleModifyConfirmTask(idx, value)}
                        >
                            {IconCloud}
                        </Button>
                        <Button onClick={() => handleModifyTask(idx)}>
                            {IconPen}
                        </Button>
                        <Button onClick={() => handleDeleteTask(idx)}>
                            {IconTrash}
                        </Button>
                    </Buttons>
                </Task>
            ))}
        </>
    );
};

export default Tasks;
