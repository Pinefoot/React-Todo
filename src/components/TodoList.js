import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


export default class TodoList extends React.Component {
    state ={
        todos: []
    }

    

    

    render(){
        return(
             <div>
             {this.props.todo.map(todo => (
             <Todo 
                key={todo.id} 
                toggleComplete = {this.props.toggleComplete}
                task={todo}
                
                

                 />
                
             ))}
             
             </div>

            
            
            );
    }
}