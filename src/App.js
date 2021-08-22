import React from "react";
import styled from "styled-components";
import "./App.css";
import CreateTask from "./components/CreateTask";

const Header = styled.header``;

const App = () => {
  return (
    <div className="App">
      <Header>ToDo List</Header>
      <CreateTask />
    </div>
  );
};

export default App;
