import React, { useState } from "react";
import Header from "./Header";
import TodoInput from "./TodoInput";
import Todolist from "./Todolist";
import { Zoom } from '@material-ui/core';
import { Fade } from '@material-ui/core';
import Prompt from "./Prompt";
import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);

  function userName(username) { //Set the name of the user.
    setName(username);
    setIsName(true);
  }

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
      {isName ? 
        <Fade in={true} timeout={{enter: 1500, exit:500}}> 
        <div>
          <Header name={name}/>
          <TodoInput addtask={addTask}/>
          {taskList.length !== 0 ? taskList.map((item, index) => {
            return <Todolist key={index} lastitem={item} id={index} onDelete={deleteTask}/>
            }) : <Zoom in={true} timeout={{enter: 1000, exit: 500}}>
                    <p className="disclaimer">You're all caught up!</p>
                 </Zoom>}
        </div>
        </Fade> : 
        <Prompt userName={userName} />}
    </div>
  );
}

export default App;
