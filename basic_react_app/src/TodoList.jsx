import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //adds unique id to every list item

const TodoList = () => {
  let [todos, setTodos] = useState([{ task: "sample data", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let handleAdd = () => {
    /* Push input values to the list */
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo(""); // clears the input field after the query
  };

  let handleChange = (event) => {
    /* Get input value */
    setNewTodo(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add new task"
        value={newTodo}
        onChange={handleChange}
      />

      <br />
      <button onClick={handleAdd}>Add</button>
      <br />
      <hr />
      <h4>Tasks todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
