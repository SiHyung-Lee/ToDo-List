import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';
import './App.css';

const Header = styled.h1`
    font-size: 24px;
    padding: 10px 20px 0;
    margin: 0;
    background-color: #6998ab;
    text-align: center;
    color: #fff;
`;

const App = () => {
    const [tasks, setTasks] = useState([
        { text: 'study react', done: false },
        { text: 'setting css framework', done: false },
        { text: 'modify react portfolio', done: true },
        { text: 'plan your trip to Europe', done: false },
        { text: 'car repair', done: true },
    ]);

    const handleAddTask = value => {
        if (value !== '') {
            setTasks([{ text: value, done: false }, ...tasks]);
        }
    };

    const handleDeleteTask = idx => {
        const result = tasks.filter((task, index) => index !== idx);
        setTasks(result);
    };

    const handleModifyTask = idx => {
        const thisTask = document.querySelector(`#task${idx}`);
        const thisTaskInput = thisTask.querySelector('.task__modify');
        const buttonModify = thisTask.querySelector('.button__modify');
        const thisTaskTitle = thisTask.querySelector('.task');

        thisTaskInput.value = thisTask.querySelector('.task').value;
        thisTaskInput.style.display = 'inline-block';
        thisTaskInput.focus();

        buttonModify.style.display = 'inline-block';
        thisTaskTitle.style.display = 'none';
    };

    const handleModifyConfirmTask = (idx, value) => {
        const thisTask = document.querySelector(`#task${idx}`);
        const thisTaskInput = thisTask.querySelector('.task__modify');
        const buttonModify = thisTask.querySelector('.button__modify');
        const thisTaskTitle = thisTask.querySelector('.task');

        thisTaskInput.style.display = 'none';
        buttonModify.style.display = 'none';
        thisTaskTitle.style.display = 'inline-block';

        if (!value) return false;

        setTasks(
            tasks.map((task, index) =>
                index === idx ? { text: value, done: task.done } : task,
            ),
        );
    };

    const handleCheckTask = idx => {
        setTasks(
            tasks.map((task, index) =>
                index === idx ? { ...task, done: !task.done } : task,
            ),
        );
    };

    useEffect(() => {
        console.log(tasks);
    });

    return (
        <div className="App">
            <Header>Your Things</Header>
            <CreateTask handleAddTask={handleAddTask} />
            <Tasks
                doneTasks={tasks.filter(task => task.done)}
                undoneTasks={tasks.filter(task => !task.done)}
                handleCheckTask={handleCheckTask}
                handleDeleteTask={handleDeleteTask}
                handleModifyTask={handleModifyTask}
                handleModifyConfirmTask={handleModifyConfirmTask}
            />
        </div>
    );
};

export default App;
