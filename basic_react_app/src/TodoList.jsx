import { useState } from "react";

const TodoList = () => {
  let [todos, setTodos] = useState(["sample list"]);
  let [newTodo, setNewTodo] = useState("");

  let handleAdd = () => {
    /* Push input values to the list */
    setTodos([...todos, newTodo]);
    setNewTodo("");
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
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
