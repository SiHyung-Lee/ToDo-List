import React, { useState } from 'react'
import styled from 'styled-components'
import CreateTask from './components/CreateTask'
import Tasks from './components/Tasks'
import './App.css'

const Header = styled.header``

const App = () => {
    const [tasks, setTasks] = useState([])

    const handleAddTask = (value) => {
        if (value !== '') {
            setTasks([{ text: value, isChecked: false }, ...tasks])
        }
    }

    const handleDeleteTask = (idx) => {
        console.log(idx)
        //setTasks(tasks.map((item, index) => console.log(idx)))
    }

    const handleModifyTask = () => {}

    const handleCheckTask = (idx) => {
        setTasks(
            tasks.map((item, index) =>
                index === idx ? { ...item, isChecked: !item.isChecked } : item
            )
        )
    }

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
    )
}

export default App
