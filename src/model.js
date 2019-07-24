import { action, thunk } from "easy-peasy";
import uuid from "uuid";

export default {
  todos: [],
  // fetch limit, 10 todo's
  fetchTodos: thunk(async actions => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const todos = await res.json();

    actions.setTodos(todos);
  }),
  // Actions
  setTodos: action((state, todos) => {
    state.todos = todos;
  }),
  // Add todo
  add: action((state, todo) => {
    todo.id = uuid.v4();
    state.todos = [...state.todos, todo];
  }),

  // toggle line-through
  toggle: action((state, id) => {
    state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }),
  // remove todo
  remove: action((state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
  })
};
