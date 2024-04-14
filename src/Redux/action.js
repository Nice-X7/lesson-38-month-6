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

export const removeTodo = (id) => {
    return dispatch => {
        dispatch({
            type: "remove/todo/start",
            payload: id
        })

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => {
                dispatch({
                    type: "remove/todo/fulfilled",
                    payload: id
                })
            })
    }
}

export const checkTodo = (id, completed) => {
    return dispatch => {
        dispatch({
            type: "check/todo/start",
            payload: id
        })

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: !completed
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: "check/todo/fulfilled",
                    payload: id
                })
            })
    }
}