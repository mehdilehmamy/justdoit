import React, {useState} from "react";
import moment from "moment";

//Greeting Settings
let greeting = ""; 
function greetUser() {
    let currentTime = new Date();
       if (currentTime.getHours() < 12) {
           greeting = "Good morning, ";
       } else if (currentTime.getHours() < 18) {
        greeting = "Good afternoon, ";
       } else {
        greeting = "Good evening, ";
       }
}

export default function Header (props) {

    greetUser();
    const [time, setTime] = useState(moment().format("MMMM Do YYYY, HH:mm"));

    setInterval( function tick() {
        setTime(moment().format("MMMM Do YYYY, HH:mm"));
       }, 1000 ); 


    return <header>
            <h1>{greeting} {props.name}.</h1>
            <p>{time}</p>
    </header>
}