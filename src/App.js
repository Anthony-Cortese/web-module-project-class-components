import React, { Component } from 'react'
import TodoList from './components/TodoList'

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}






// import React from 'react';
// import TodoList from './components/TodoList'
// import AddTodo from './components/AddTodo'
// // const todos = [{
// //   task: "organize",
// //   id: 1,
// //   completed: 'false',
// // },
// // {
// //   task: "organize",
// //   id: 2,
// //   completed: 'false',
// // },
// // {
// //   task: "organize",
// //   id: 3,
// //   completed: 'false',
// // }]

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [],
//       tasks: '',
//     }
//   }

//   toggleItem = (clickedOnId) => {
//     this.setState({
//       todos: this.state.todos.map((todo) => {
//         if(todo.id === clickedOnId) {
//           return {
//             ...todo,
//             completed: !todo.completed
//           }
//         } else {
//           return todo;
//         }
//       })
//     })
//   }
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   addTodo = (todoItem) => {
//     const newTodo = {
//       task: todoItem,
//       id: new Date(),
//       completed: false,
//     }
//     this.setState({
//       todos: [...this.state.todos, newTodo]
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Todo List</h2>
//         <TodoList addTodo={this.addTodo} />

//         <AddTodo todos={this.state.todos} toggleItem={this.props.toggleItem} />
        
        
//       </div>
//     );
//   }
// }

// export default App;
