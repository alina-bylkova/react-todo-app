import React, { Component } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TodoCard.css';

class TodoCard extends Component {
  render() {
    let selectedClass = 'item__container item__container--pending';
    if (this.props.done) {
      selectedClass = 'item__container item__container--done';
    }
    return (
      <div
        ref={(input) => (this.ItemToDelete = input)}
        className={selectedClass}
        id={this.props.id}
        onClick={() => {
          this.props.handleDoneState(this.props.id);
        }}
      >
        <h3 className="item__title">{this.props.title}</h3>
        <p className="item__description">{this.props.description}</p>
        <button
          className="item__remove-button"
          onClick={(e) => {
            e.stopPropagation();
            this.props.handleDelete(this.props.id);
          }}
        >
          Remove <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    );
  }
}

export default TodoCard;
