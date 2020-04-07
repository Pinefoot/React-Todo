import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
 constructor(){
   super();
   this.state={ TodosList: [{
     task: '',
     id: '',
     complete: false,
   }] };
 }

 addTodo = (todo) => {
  this.setState({
      TodosList: [...this.state.TodosList, todo]
  })
  console.log(todo);
}
 
toggleComplete = (id) => {
  this.setState({
      TodosList: this.state.TodosList.map(todo =>{
          if (todo.id === id){
              //this is where the update occurs
              return{
                  ...todo,
                  complete: !todo.complete
              };
          }else{
              return todo;
          }
      })
  })
  // console.log(id);
}
 
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm onSubmit = {this.addTodo}/>
        <TodoList todo = {this.state.TodosList} toggleComplete = {this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
