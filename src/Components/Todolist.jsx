import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import { Fade } from '@material-ui/core';


export default function Todolist (props) {

    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    function handleDelete () { //Delete task
        props.onDelete(props.id);
    }

    return (
        <div className="todo-container">
        <Fade in={true} timeout={{enter: 500, exit:500}}>
        <div className={!checked ? "todo-item" : "itemChecked"}>
               <Checkbox checked={checked} onChange={handleChange} color="primary"/>
               <li>{props.lastitem}</li>
               <DeleteIcon className="trash-icon" onClick={handleDelete}/>
            </div>
        </Fade>      
      </div>
    );
}