import TodoElement from "./TodoElement";
import "./style.css";
import myDatas from "./myData";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: myDatas,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedDatas = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: updatedDatas,
      };
    });
  }

  render() {
    const todoDatas = this.state.todos.map((item) => (
      <TodoElement item={item} key={item.id} handleChange={this.handleChange} />
    ));
    return <div className="todo-list">{todoDatas}</div>;
  }
}

export default App;

