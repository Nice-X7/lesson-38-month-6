import ReactLoading from "react-loading";
import { Todo } from "./Todo";

export const Todos = ({ handleChecked, handleRemove, todos, loading }) => {
  return (
    <>
      {loading ? (
        <div className="loadProject">
          {/* -------React_loading------ */}
          <ReactLoading color={"#000"} width={120} height={120} type={"spin"} />
        </div>
      ) : (
        todos.map((item) => {
          return (
            <Todo
              handleChecked={handleChecked}
              handleRemove={handleRemove}
              ID={item.id}
              title={item.title}
              check={item.check}
              completed={item.completed}
              Delete={item.delete}
            />
          );
        })
      )}
    </>
  );
};
