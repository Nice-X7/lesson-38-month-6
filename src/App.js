import { useEffect } from "react";
import { loadTodos, removeTodo, checkTodo } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/Header";

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

        {
          loading ? "Подождите идет загрузка" :
            todos.map((item) => {
              return (
                <div key={item.id} className="todo" >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleChecked(item.id, item.completed)}
                  />
                  <span>{item.title}</span>
                  <button onClick={() => handleRemove(item.id)}>
                    Delete
                  </button>
                </div>
              )
            })
        }
      </div>
    </div>
  );
}