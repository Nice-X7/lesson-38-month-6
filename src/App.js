import { useEffect } from "react";
import { loadTodos } from "./action";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const todos = useSelector((state) => state.todos)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  return (
    <div className="App">
      <h1>Список дел</h1>
      <div className="content">
        {
          loading ? "Подождите идет загрузка" :
            todos.map((item) => {
              return (
                <div key={item.id} className="todo" >
                  <span>{item.title}</span>
                </div>
              )
            })
        }
      </div>
    </div>
  );
}