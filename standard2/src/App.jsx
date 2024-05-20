import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title,
      todo: input,
      isDone: false,
    };

    if (input && title) {
      setTodos([...todos, newTodo]);
      setInput("");
      setTitle("");
    }
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const finishTodo = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedList);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          value={input}
          placeholder="Todos"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        <h2>Working</h2>
        {todos
          .filter((todo) => !todo.isDone)
          .map((item) => (
            <li key={item.id}>
              {item.title}: {item.todo}
              <button onClick={() => removeTodo(item.id)}>삭제</button>
              <button onClick={() => finishTodo(item.id)}>완료</button>
            </li>
          ))}
      </div>

      <div>
        <h2>Completed</h2>
        <ul>
          {todos
            .filter((todo) => todo.isDone)
            .map((item, index) => (
              <li key={item.id}>
                {item.title}: {item.todo}
                <button onClick={() => removeTodo(item.id)}>삭제</button>
                <button onClick={() => finishTodo(item.id)}>취소</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
