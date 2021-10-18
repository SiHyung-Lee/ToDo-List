import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';
import './App.css';

const Header = styled.header``;

const App = () => {
    const [tasks, setTasks] = useState([
        { text: 'aaaaaaaa', isChecked: false },
        { text: 'bbbbbbbb', isChecked: false },
        { text: 'cccccccc', isChecked: false },
        { text: 'dddddddd', isChecked: false },
    ]);

    const handleAddTask = (value) => {
        if (value !== '') {
            setTasks([{ text: value, isChecked: false }, ...tasks]);
        }
    };

    const handleDeleteTask = (idx) => {
        let array = tasks;
        array.splice(idx, 1);
        setTasks([...array]);
    };

    const handleModifyTask = () => {};

    const handleCheckTask = (idx) => {
        setTasks(
            tasks.map((item, index) =>
                index === idx ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    };

    return (
        <div className='App'>
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
