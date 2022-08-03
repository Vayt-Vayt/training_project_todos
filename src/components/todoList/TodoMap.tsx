import React, { useState } from "react";
import ChangeForm from "./ChangeForm";
import TodoFunctionals from "./TodoFunctionals";

const TodoMap = (props: any) => {
  const [valueId, setValueId] = useState(false);
  const { todos, setComplet } = props;

  return (
    <>
      {todos.map(
        (todo: { todo: any; id: number | any }, index: { index: number }) => (
          <ul key={todo.id} onClick={() => setComplet(todo.id)}>
            {valueId === todo.id ? (
              <ChangeForm
                todos={todos}
                setValueId={setValueId}
                valueId={valueId}
              />
            ) : (
              <TodoFunctionals
                todo={todo}
                index={index}
                setValueId={setValueId}
              />
            )}
          </ul>
        )
      )}
    </>
  );
};

export default TodoMap;
