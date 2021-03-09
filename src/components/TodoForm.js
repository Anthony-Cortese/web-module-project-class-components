import React, { Component } from 'react'


export default class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {task: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmit(evt) {
        evt.preventDefault()
    }

    handleSubmit(evt) {
        evt.preventDefault(
            this.props.createTodo(...this.state, completed: false),
            this.setState({ task: ''})
        )
    }
    render() {
        return (
            
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'></label>
                <input 
                type="text" 
                placeholder="new todo" 
                name='task' 
                id='task' 
                value={this.state.task} 
                onChange={this.handleChange}></input>
                
                <button className={this.props.completed ? 'completed': ''}>Add Todo</button>
                </form>
            </div>
        )
    }
}
