import React from 'react';

//form lives on this component

export default class TodoForm extends React.Component {
    state ={
        task: ''
    }

    handleChange = (event) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit({
            task: this.state.task,
            id:  Date.now(),
            complete: false,
        });
        this.setState({
            task: ''
        })
    }

    render(){
        return (
        <form onSubmit = {this.handleSubmit}>
        <input 
            name = "task"
            value={this.state.task} 
            onChange={this.handleChange}
            placeholder="add task here"
            />
            <button onClick={this.handleSubmit}>Add Task</button>
            {/* <button>Remove Task</button> */}
            
        </form>
        
        )   
}
}