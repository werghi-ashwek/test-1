import React from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  
  export default function GroupSizesColors({setFiltred}) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <ButtonGroup>
          color="secondary"
          aria-label="outlined secondary button group"
        
          <Button style = {{color:'#F08080',borderColor: "#FFC261"}} onClick={()=>setFiltred("All")}>All</Button>
          <Button style = {{color:'#F08080',borderColor: "#FFC261"}} onClick={()=>setFiltred("Absent")}> Absent </Button>
          <Button style = {{color:'#F08080',borderColor: "#FFC261"}} onClick={()=>setFiltred("Present")}> Present </Button>
          

        </ButtonGroup>
      </div>
    );
  }


 
