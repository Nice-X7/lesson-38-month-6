import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const startData = {
  todos: [],
  loading: false
}

const reducer = (state = startData, action) => {
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

    case "check/todo/fulfilled":
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }

          return todo
        })
      }

    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);