import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function TodoInput (props) {
    const [task, setTask] = useState("");
    
    function handleChange(event) {
        let userInput = event.target.value;
        setTask(userInput);   
    }

    function addItem () { //Add item to the Task Array
        props.addtask(task); //Push item to App component
        setTask("");
    }

    return (
        <div className="inputContainer">
            <div className="todoInput">
         <input 
            type="text" 
            name="todo" 
            placeholder="Enter a task..." 
            value={task} 
            onChange={handleChange}
            autoComplete="off"
        />
        </div>
        
        <AddCircleIcon onClick={addItem} className="addBttn"/>
        </div> 
    );
}