import React from "react";
import Form from "./Form";

export default class App extends React.Component {
  state = {
    todos: [],
  };

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
