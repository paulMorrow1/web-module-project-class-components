import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="Add task here" />
          <button>Add Todo</button>
          <button>Clear Todo</button>
        </form>
      </div>
    );
  }
}

export default Form;
