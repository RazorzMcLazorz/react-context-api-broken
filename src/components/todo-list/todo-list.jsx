import * as React from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
        // Fix an ability to display all tasks
        // Fix a layout, checkboxes should be listed in a column
        // Fix an ability to add a new task
        // Fix an ability to delete a task
        // Fix an ability to count completed tasks
        // Fix an ability to toggle a task
      )}
    </div>
  );
};
