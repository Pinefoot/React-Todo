import React from 'react';
import {Button} from 'reactstrap';
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

    // handleRemove = (event) =>{
    //     event.preventDefualt();
    //     this.props.removeComplete({
    //         task: '',
    //         id: '',
    //         complete: true,
    //     })
    // }

    render(){
        return (
        <form className = "main-form" onSubmit = {this.handleSubmit}>
        <input 
            name = "task"
            value={this.state.task} 
            onChange={this.handleChange}
            placeholder="add task here"
            />
            <Button className = "btn-add" color="warning" onClick={this.handleSubmit}>Add Task</Button>
            {/* <button>Remove Task</button> */}
            {/*  */}
            
        </form>
        
        )   
}
}