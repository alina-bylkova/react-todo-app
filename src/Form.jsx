import React, { Component } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Form.css';

class Form extends Component {
  createTodoItemId = (array) => {
    const highestId = array.reduce(
      (accumulator, currentValue) => (currentValue.id > accumulator ? currentValue.id : accumulator),
      0,
    );
    return Number.parseInt(highestId, 0) + 1;
  };

  readInputAndGenerateTodoItem = () => {
    const title = this.newTitle.value;
    const description = this.newDescription.value;
    const id = this.createTodoItemId(this.props.todoList);
    const done = false;
    this.addForm.reset();
    return {
      id,
      title,
      description,
      done,
    };
  };

  updateStateOnClick = (event) => {
    event.preventDefault();
    const newTodoItem = this.readInputAndGenerateTodoItem();
    if (newTodoItem.title === '' || newTodoItem.description === '') {
      this.props.changeValidationMessage(true);
      return;
    }
    this.props.handleSubmit(newTodoItem);
    this.props.changeValidationMessage(false);
  };

  componentDidMount() {
    document.getElementById('title').focus();
  }

  render() {
    let selectedClass = 'input-group__validation-message input-group__validation-message--hidden';
    if (this.props.validationMessage) {
      selectedClass = 'input-group__validation-message input-group__validation-message--active';
    }
    return (
      <>
        <form ref={(input) => (this.addForm = input)} className="input-group">
          <div className="input-group__header">Register New ToDo</div>
          <div className={selectedClass}>Please fill in all input fields</div>
          <label className="input-group__label" htmlFor="title">
            Title
          </label>
          <input
            ref={(input) => (this.newTitle = input)}
            className="input-group__input"
            type="text"
            id="title"
            name="title"
            required
          />
          <label className="input-group__label" htmlFor="description">
            Description
          </label>
          <input
            ref={(input) => (this.newDescription = input)}
            className="input-group__input"
            type="text"
            id="description"
            name="description"
            required
          />
          <button className="input-group__button" type="submit" id="add-button" onClick={this.updateStateOnClick}>
            Add <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>
      </>
    );
  }
}

export default Form;
