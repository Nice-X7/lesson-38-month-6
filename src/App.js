import { useEffect } from "react";
import { loadTodos, removeTodo, checkTodo } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/App/Header";
import { Todos } from "./components/App/Todos";

export const App = () => {
  const todos = useSelector((state) => state.todos)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  const handleRemove = (id) => {
    dispatch(removeTodo(id))
  }

  const handleChecked = (id, completed) => {
    dispatch(checkTodo(id, completed))
  }


  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* -------------Todos-------------- */}
        <Todos
          handleChecked={handleChecked}
          handleRemove={handleRemove}
          todos={todos}
          loading={loading}
        />
      </div>
    </div>
  );
}