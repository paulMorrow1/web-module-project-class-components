import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    const { todos, deleteTodo, toggleTodo } = this.props;
    return (
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
      </div>
    );
  }
}
