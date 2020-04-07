import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import img from './img/vaporwave2.jpg';
import styled from 'styled-components';
import "./components/Todo.css";


const Content = styled.div`
    border: 1px solid #000;
    background-image: url(${img});
    width: 100%;
    height: 200vh;
`;



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
 constructor(){
   super();
   this.state={ todosList: [{
     task: '',
     id: '',
     complete: false,
   }] };
 }

 addTodo = (todo) => {
  this.setState({
      todosList: [...this.state.todosList, todo]
  })
  console.log(todo);
}

// removeComplete = (item) => {
//   const newTodos = this.state.todosList.filter(todosList =>{
//     return todosList == true;
//   })
//   this.setState({
//     todosList: [ ...todosList, newTodos]
//   })

//  console.log('this is a function being passed down')
// }

removeComplete=()=>{
  this.setState({
    todosList: this.state.todosList.filter((todosList)=>{
      return todosList.complete !==true;
    })
    
  })
  console.log('this has been fired');
}

 
toggleComplete = (id) => {
  this.setState({
      todosList: this.state.todosList.map(todo =>{
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
      <Content className="appdiv">
        <h2 className="intro">Todo List</h2>
        <TodoForm onSubmit = {this.addTodo}
        />
        <TodoList todo = {this.state.todosList}
         toggleComplete = {this.toggleComplete}
         />

      <button className ="clr-btn" onClick={this.removeComplete}>CLEAR COMPLETED</button>

      </Content>
    );
  }
}

export default App;
