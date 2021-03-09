// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList
import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = [{ todos: "walk the fish"}, {task: "groom"}];
    }

    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
    
    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== todo.id)
        })
    }
    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo
        })
        this.setState({ todos: updatedTodos })
    }
    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed }
            }
            return todo
        })
        this.setState({ todos: updatedTodos })
    }
    
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo 
            key={todo.id} 
            task={todo.task}
            completed={todo.completed} 
            removeToDo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
             />
        })
        return (
            <div>
                <h1>Todo List</h1>
                <ul>{todos}</ul>
                <TodoForm createTodo={this.create} />
            </div>
        )
    }
}      

export default TodoList
