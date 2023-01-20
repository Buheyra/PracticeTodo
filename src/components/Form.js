export default function Form({ todos, text, setTextInput, setTodo }) {
  function grapText(e) {
    setTextInput(e.target.value);
  }

  function addTodo(e) {
    e.preventDefault();
    setTodo([
      ...todos,
      { text: text, complete: false, id: Math.random() * 1000 }
    ]);

    console.log(todos);
    setTextInput("");
  }

  return (
    <form>
      <input value={text} onChange={grapText}></input>
      <button onClick={addTodo} type="submit">
        Sumbit
      </button>

      <select name="TodoStatus">
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="Uncomplete">Uncomplete</option>
      </select>
    </form>
  );
}
