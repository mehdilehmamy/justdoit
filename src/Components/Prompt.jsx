import React, { useState } from "react";
import { Zoom } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';



  const theme = createMuiTheme();
  const useStyles = makeStyles((theme) => ({
    btn: {
      margin: "0 auto",
      minWidth: "50%",
      fontFamily: "Poppins, sans serif",
      fontWeight:"600",
      backgroundImage: "linear-gradient(120deg, #51c2d5 0%, #23689b 100%)",
      '&:hover': {
        transition: ".3s ease-out",
        transform: "scale(1.1)"
       },
       transition: ".2s ease-out",
    }
  }));

export default function Prompt (props) {
   const classes = useStyles();
   const [name, setName] = useState("");

   function handleChange(event) {
       let input = event.target.value;
       setName(input);
   }

   function addName() {
       props.userName(name);
       setName("");
   }

   return (
       <div>
            <Zoom in={true} timeout={{enter: 1000, exit: 500}}>
                <div className="prompt">
                    <h1>Hey stranger, what's your name?</h1>
                    <input type="text" value={name} onChange={handleChange} placeholder="Name..."/>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" className={classes.btn} onClick={addName}>Submit</Button>
                    </ThemeProvider>
                </div> 
            </Zoom>      
       </div>
   );
}