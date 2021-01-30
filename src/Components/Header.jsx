import React, {useState} from "react";
import moment from "moment";
import { Fade } from '@material-ui/core';

//Greeting Settings
let greeting = ""; 
function greetUser() {
    let currentTime = new Date();
       if (currentTime.getHours() < 12) {
           greeting = "Good morning, Mehdi.";
       } else if (currentTime.getHours() < 18) {
        greeting = "Good afternoon, Mehdi.";
       } else {
        greeting = "Good evening, Mehdi.";
       }
}

export default function Header () {

    greetUser();
    const [time, setTime] = useState(moment().format("MMMM Do YYYY, HH:mm"));

    setInterval( function tick() {
        setTime(moment().format("MMMM Do YYYY, HH:mm"));
       }, 1000 ); 


    return <header>
        <Fade in={true} timeout={{enter: 1500, exit:500}}>
          <div>
            <h1>{greeting}</h1>
            <p>{time}</p>
          </div>
        </Fade>   
    </header>
}