import React from "react";
import "./Todo.css";
// const Todo = props => (

// <div 
//     // style={{
//     //     textDecoration: props.todo.complete ? 'line-through' : ""
//     // }}
//     onClick={props.toggleComplete}>
//         {props.todo.task}
//     </div>



// )

const Todo = props => {
   const toggleClass = props.task.complete ? 'completed' : ''
   console.log(props.task.complete);
    return(
    <div>
    
        
        <p className = {toggleClass}
            onClick={()=> props.toggleComplete(props.task.id)}>
            {props.task.task}
            </p>
        {/* {console.log (props)} */}
    </div>
    
    )
    
}
 
export default Todo;
 

  
