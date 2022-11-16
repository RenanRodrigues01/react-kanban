import React, { useState } from 'react'
import './App.css';

import NavBar from './components/navBar/navBar';
import TaskList from './components/TaskList/TaskList';


let idAcc = 0;
const addID = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: addID(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask]
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((tasks) => {
        if (tasks.id === id) {
          return {...tasks, title, state};
        } else {
          return tasks;
        }
      });
    });
  };

  const deletTask = (id) =>{
    setTasks((existingTasks) =>{
      return existingTasks.filter((tasks) => tasks.id !== id);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList 
          title="Pendente" 
          taskState="Pendente"
          onAddTasks={addTask} 
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeletTask={deletTask}
        />
         <TaskList 
          title="Fazendo" 
          taskState="Fazendo"
          onAddTasks={addTask} 
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeletTask={deletTask}
        />
         <TaskList 
          title="Completa"
          taskState="Completa"
          onAddTasks={addTask} 
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
          onDeletTask={deletTask}
        />
      </div>
    </div>
  );
}

export default App;
