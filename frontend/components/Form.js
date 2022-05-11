import React from "react";

class Form extends React.Component {
  state = {
    inputText: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputText !== "") {
      this.props.addNewTodo(this.state.inputText);
      this.setState((state) => {
        return {
          ...state,
          inputText: "",
        };
      });
    }
  };

  inputOnChange = (e) => {
    const inputText = e.target.value;
    this.setState((state) => {
      return {
        ...state,
        inputText,
      };
    });
  };

  render() {
    const { inputText } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          placeholder="Add task here"
          value={inputText}
          onChange={this.onChange}
        />
        <button type="submit" disabled={inputText === ""}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
