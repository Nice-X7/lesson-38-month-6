export const loadTodos = () => {
    return dispatch => {
        dispatch({ type: "load/todos/start" })

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: "load/todos/fulfilled",
                    payload: json
                })
            })
    }
}