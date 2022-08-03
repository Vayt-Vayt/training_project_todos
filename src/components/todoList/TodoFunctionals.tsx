import React from "react";
import { useActions } from "../hooks/useActions";
import "./TodoList.css";

const TodoFunctionals = ({ todo, index, setValueId }: any) => {
  const { removeTodo } = useActions();

  return (
    <div className={todo.completed ? "funcFolse" : "func"}>
      <li className={todo.completed ? "done" : "doneFolse"}>
        {index + 1} - {todo.title}
      </li>
      {todo.completed ? (
        <button onClick={() => removeTodo(todo.id)}>Удалить</button>
      ) : (
        <button onClick={() => setValueId(todo.id)}>Изменить</button>
      )}
    </div>
  );
};

export default TodoFunctionals;
