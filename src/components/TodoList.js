import Todo from "./Todo";

export default function TodoList({ todos, remove, setTodo }) {
  return todos.map((todo, idx) => {
    return (
      <Todo
        key={idx}
        todo={todo.text}
        id={todo.id}
        todos={todos}
        setTodo={setTodo}
      />
    );
  });
}
