import React, { useState } from 'react'
import './App.css';

import NavBar from './components/navBar/navBar';
import TaskList from './components/TaskList/TaskList';

const task = {
  id: 0,
  title: "nova tarefa",
  state: "pendente"
}

let idAcc = 0;
const addID = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    console.log("função dentro do app")
    const newTask = {
      id: addID(),
      title,
      state
    };
    setTasks((existinTasks) =>{
      return [...existinTasks, newTask]
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList title="Pendente" onAddTasks={addTask} tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
