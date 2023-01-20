import "./styles.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

export default function App() {
  const [text, setTextInput] = useState("");
  const [todos, setTodo] = useState([]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Form
        todos={todos}
        setTodo={setTodo}
        text={text}
        setTextInput={setTextInput}
      />
      <TodoList todos={todos} setTodo={setTodo} />
    </div>
  );
}
