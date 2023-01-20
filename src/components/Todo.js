export default function Todo({ todo, setTodo, todos, id }) {
  function remove(id) {
    console.log(id);

    const removeTodo = todos.filter((item) => {
      return item.id !== id;
    });

    setTodo(removeTodo);
  }

  return (
    <>
      <div></div>
      <span>{todo}</span>
      <button>complete</button>
      <button onClick={() => remove(id)}>X</button>
    </>
  );
}
