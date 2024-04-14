const startData = {
    todos: [],
    loading: false
}

export const reducer = (state = startData, action) => {
    switch (action.type) {
        case "load/todos/start":
            return {
                loading: true
            }

        case "load/todos/fulfilled":
            return {
                todos: action.payload
            }

        case "remove/todo/fulfilled":
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        case "remove/todo/start":
            return {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            delete: true
                        }
                    }

                    return todo
                })
            }

        case "check/todo/start":
            return {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            check: true
                        }
                    }

                    return todo
                })
            }

        case "check/todo/fulfilled":
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                            check: false
                        }
                    }

                    return todo
                })
            }

        default:
            return state
    }
}