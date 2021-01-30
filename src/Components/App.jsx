import React, { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import Todolist from "./Todolist";
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask (task) { //Retreive Task from todoinput component and add it to the list
    setTaskList((prev) => {
      return [...prev, task];
    });
  }

  function deleteTask (id) { //Delete selected task
    setTaskList((prev) => {
      return prev.filter((e, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div className="App">
      <Header/>
      <TodoInput addtask={addTask}/>
      {taskList.map((item, index) => {
        return <Todolist key={index} lastitem={item} id={index} onDelete={deleteTask}/>
      })}
    </div>
  );
}

export default App;
