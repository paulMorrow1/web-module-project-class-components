import React from "react";

export default class Todo extends React.Component {
  render() {
    const { todo, deleteTodo, toggleTodo } = this.props;
    return (
      <div
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.name}
        <button type="button" onClick={() => toggleTodo(todo.id)}>
          Mark {todo.completed ? "Uncompleted" : "Completed"}
        </button>
        <button type="button" onClick={() => deleteTodo(todo.id)}>
          Delete Todo
        </button>
      </div>
    );
  }
}
