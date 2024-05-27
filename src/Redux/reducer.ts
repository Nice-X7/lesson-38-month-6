import { initialData } from "../components/Types/Types"

const startData: initialData = {
    todos: [],
    todosLoading: false,
    users: [],
    usersLoad: false
}

interface Action {
    type: string
    payload?: any
}

export const reducer = (state = startData, action: Action) => {
    switch (action.type) {
        case "load/todos/start":
            return {
                ...state,
                todosLoading: true
            }

        case "load/todos/fulfilled":
            return {
                ...state,
                todos: action.payload,
                todosLoading: false
            }

        case "remove/todo/start":
            return {
                ...state,
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

        case "remove/todo/fulfilled":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        case "check/todo/start":
            return {
                ...state,
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
                ...state,
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

        case "load/users/start":
            return {
                ...state,
                usersLoad: true
            }

        case "load/users/fulfilled":
            return {
                ...state,
                usersLoad: false,
                users: action.payload
            }

        default:
            return state
    }
}