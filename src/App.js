import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';
import './App.css';

const Header = styled.header`
    font-size: 24px;
    padding: 10px 20px;
    background-color: #f2f2f2;
`;

const App = () => {
    const [tasks, setTasks] = useState([
        { text: 'aaaaaaaa', isChecked: false },
        { text: 'bbbbbbbb', isChecked: false },
        { text: 'cccccccc', isChecked: false },
    ]);

    const handleAddTask = value => {
        if (value !== '') {
            setTasks([
                { text: value, isChecked: false, readOnly: true },
                ...tasks,
            ]);
        }
    };

    const handleDeleteTask = idx => {
        const result = tasks.filter((task, index) => index !== idx);
        setTasks(result);
    };

    const handleModifyTask = idx => {
        const thisTaskInput = document.querySelector(
            `#task${idx} input[type=text]`,
        );
        thisTaskInput.readOnly = false;
        thisTaskInput.focus();
    };

    const handleCheckTask = idx => {
        setTasks(
            tasks.map((task, index) =>
                index === idx ? { ...task, isChecked: !task.isChecked } : task,
            ),
        );
    };

    return (
        <div className="App">
            <Header>ToDo List</Header>
            <CreateTask handleAddTask={handleAddTask} />
            <Tasks
                tasks={tasks}
                handleCheckTask={handleCheckTask}
                handleDeleteTask={handleDeleteTask}
                handleModifyTask={handleModifyTask}
            />
        </div>
    );
};

export default App;
