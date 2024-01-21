import { useDispatch, useSelector } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="">
        {todoslice.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
export default Todos;
