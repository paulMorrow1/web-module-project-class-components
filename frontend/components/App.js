import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default class App extends React.Component {
  state = {
    todos: [],
  };

  addNewTodo = (newTodoText) => {
    const newTodo = {
      name: newTodoText,
      id: Date.now(),
      completed: false,
    };
    this.setState((state) => {
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    });
  };

  deleteTodo = (id) => {
    const todoListAfterDeletion = this.state.todos.filter((todo) => {
      if (todo.id === id) return null;
      return todo;
    });
    this.setState((state) => {
      return {
        ...state,
        todos: todoListAfterDeletion,
      };
    });
  };

  toggleTodo = (id) => {
    const markingTodocompleted = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.setState((state) => {
      return {
        ...state,
        todos: markingTodocompleted,
      };
    });
  };

  filterTodos = (todos) => {
    if (this.state.filterByValue === "showCompleted") {
      return todos.filter((todo) => todo.completed === true);
    }
    if (this.state.filterByValue === "showUnCompleted") {
      return todos.filter((todos) => todos.completed === false);
    }
    return todos;
  };

  showFullList = () => {
    this.setState((state) => {
      return {
        ...state,
        filterByValue: "showFullList",
      };
    });
  };

  showUnCompleted = () => {
    this.setState((state) => {
      return {
        ...state,
        filterByValue: "showUnCompleted",
      };
    });
  };

  showCompleted = () => {
    this.setState((state) => {
      return {
        ...state,
        filterByValue: "showCompleted",
      };
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoList
          todos={this.filterTodos(todos)}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
        />
        <button onClick={this.showFullList}>Show Full List</button>
        <button onClick={this.showCompleted}>Show Completed</button>
        <button onClick={this.showUnCompleted}>Show Uncompleted</button>
        <Form addNewTodo={this.addNewTodo} />
      </div>
    );
  }
}
