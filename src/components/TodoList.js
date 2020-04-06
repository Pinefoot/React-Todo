import React from 'react';
import ToDoForm from './TodoForm';
import Todo from './Todo';


export default class TodoForm extends React.Component {
    state ={
        todos: []
    }

    addTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    toggleComplete(id){
        this.setState({
            todos: this.state.todos.map(todo =>{
                if (todo.id === id){
                    //thisi s where the update occurs
                    return{
                        ...todo,
                        complete: !todo.complete
                    }
                }else{
                    return todo;
                }
            })
        })
    }

    render(){
        return(
             <div><ToDoForm onSubmit={this.addTodo}/>
             {this.state.todos.map(todo => (
             <Todo 
                key={todo.id} 
                toggleComplete = {()=> this.toggleComplete(todo.id)}
                todo={todo}
                

                 />
                
             ))}
             
             </div>

            
            
            );
    }
}