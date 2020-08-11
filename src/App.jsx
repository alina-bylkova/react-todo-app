import React, { Component } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      validationMessage: false,
    };
  }

  persistState = (newArr) => {
    this.setState({ todoList: newArr });
    localStorage.setItem('todoList', JSON.stringify(newArr));
  };

  handleSubmit = (newTodoItem) => {
    const newArr = [...this.state.todoList, newTodoItem];
    this.persistState(newArr);
  };

  handleDelete = (id) => {
    const newArr = [...this.state.todoList];
    const index = newArr.findIndex((todoItem) => todoItem.id === id);
    newArr.splice(index, 1);
    this.persistState(newArr);
  };

  handleDoneState = (id) => {
    const newArr = [...this.state.todoList];
    const index = newArr.findIndex((todoItem) => todoItem.id === id);
    newArr[index].done = newArr[index].done ? false : true;
    this.persistState(newArr);
  };

  updateTodoListFromLocalStorage = () => {
    const localStorageTodo = JSON.parse(localStorage.getItem('todoList'));
    if (localStorageTodo !== null) {
      this.setState({ todoList: localStorageTodo });
    }
  };

  changeValidationMessage = (message) => {
    this.setState({ validationMessage: message });
  };

  componentDidMount() {
    this.updateTodoListFromLocalStorage();
  }

  render() {
    return (
      <main className="App">
        <Form
          todoList={this.state.todoList}
          validationMessage={this.state.validationMessage}
          handleSubmit={this.handleSubmit}
          changeValidationMessage={this.changeValidationMessage}
        />
        <TodoList
          todoList={this.state.todoList}
          handleDelete={this.handleDelete}
          handleDoneState={this.handleDoneState}
        />
      </main>
    );
  }
}

export default App;
