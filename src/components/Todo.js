import React from "react";

const Todo = props => (

<div 
    style={{
        textDecoration: props.todo.complete ? 'line-through' : ""
    }}
    onClick={props.toggleComplete}>
        {props.todo.task}
    </div>



)

export default Todo;
  
