import { useEffect } from "react";
import { loadTodos, removeTodo, checkTodo, loadUsers } from "./Redux/action";
import { Header } from "./components/App/Header";
import { Todos } from "./components/App/Todos";
import ReactLoading from "react-loading";
import { useTypedSelector } from "./components/hooks";
import { useTypedDispatch } from "./components/hooks";

export const App: React.FC = () => {
  const todos = useTypedSelector((state) => state.todos)
  const userLoading: boolean = useTypedSelector(state => state.usersLoad)
  const loading: boolean = useTypedSelector((state) => state.todosLoading)
  const dispatch = useTypedDispatch()

  useEffect((): void => {
    dispatch(loadTodos())
    dispatch(loadUsers())
  }, [])

  const handleRemove = (id: number): void => {
    dispatch(removeTodo(id))
  }

  const handleChecked = (id: number, completed: boolean): void => {
     dispatch(checkTodo(id, completed))
  }


  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* -------------Todos-------------- */}
        {
          loading || userLoading ? (
            <ReactLoading color={"#000"} width={120} height={120} type={"spin"} />
          ) : 
          <Todos
            handleChecked={handleChecked}
            handleRemove={handleRemove}
            todos={todos}
          />
        }

      </div>
    </div>
  );
}