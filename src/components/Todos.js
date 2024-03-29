import React, { Fragment, useEffect } from "react";
import { useStore, useActions } from "easy-peasy";
import TodoItem from "./TodoItem";

const Todos = () => {
  // store management todo's
  const todos = useStore(state => state.todos);
  const fetchTodos = useActions(actions => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  return (
    // react fragment or div, map todo's
    <Fragment>
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </Fragment>
  );
};

export default Todos;
