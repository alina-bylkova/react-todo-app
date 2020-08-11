import React from 'react';
import TodoCard from './TodoCard';
import './TodoList.css';

function TodoList(props) {
  return (
    <section className="todo-list">
      <div className="items">
        {props.todoList.map((todoItem) => (
          <TodoCard
            id={todoItem.id}
            title={todoItem.title}
            description={todoItem.description}
            done={todoItem.done}
            key={todoItem.id}
            handleDelete={props.handleDelete}
            handleDoneState={props.handleDoneState}
          />
        ))}
      </div>
    </section>
  );
}

export default TodoList;
