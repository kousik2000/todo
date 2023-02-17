import "./index.css";

import { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import TodoItem from "../TodoItem";

class TodoList extends Component {
  state = { todoList: [], addTask: "" };

  updateTask = (event) => {
    this.setState({ addTask: event.target.value });
  };

  addNewTask = (event) => {
    event.preventDefault();
    const { addTask } = this.state;

    const currentDate = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
    const newTodo = {
      id: uuidv4(),
      addTask,
      date: currentDate,
      isToggle: false,
    };
    console.log(newTodo);
    this.setState((prevState) => ({
      todoList: [...prevState.todoList, newTodo],
      task: "",
    }));
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="todos-bg-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="todos-heading">Todos</h1>
              <form onSubmit={this.addNewTask}>
                <h1 className="create-task-heading">
                  Create{" "}
                  <span className="create-task-heading-subpart">Task</span>
                </h1>
                <input
                  type="text"
                  className="todo-user-input"
                  placeholder="What needs to be done?"
                  onChange={this.updateTask}
                />
                <button className="button" type="submit">
                  Add
                </button>
              </form>
              <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
              </h1>
              <ul className="todo-items-container" id="todoItemsContainer">
                {todoList.map((eachTodo) => (
                  <TodoItem todoDetails={eachTodo} key={eachTodo.id} />
                ))}
              </ul>
              <button className="button" id="saveTodoButton">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
