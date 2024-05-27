import { TodoTypes, UserTypes } from "./Types"

interface loadTodosStartAction {
    type: "load/todos/start"
}

interface loadTodosFulfilledAction {
    type: "load/todos/fulfilled"
    payload: TodoTypes[]
}

interface removeTodoStartAction {
    type: "remove/todo/start"
    payload: number
}

interface removeTodoFulfilledAction {
    type: "remove/todo/fulfilled"
    payload: number
}

interface checkTodoStartAction {
    type: "check/todo/start"
    payload: number
}

interface checkTodoFulfilledAction {
    type: "check/todo/fulfilled"
    payload: number
}

interface loadUsersStartAction {
    type: "load/users/start"
}

interface loadUsersFulfilledAction {
    type: "load/users/fulfilled"
    payload: UserTypes[]
}

export type actionType =
    | loadTodosStartAction
    | loadTodosFulfilledAction
    | removeTodoStartAction
    | removeTodoFulfilledAction
    | checkTodoStartAction
    | checkTodoFulfilledAction
    | loadUsersStartAction
    | loadUsersFulfilledAction