import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import "./TodoList.css";

const ChangeForm = ({ todos, setValueId, valueId }: any) => {
  const { changeTodo } = useActions();
  const [inputValue, setInputValue] = useState("");
  const changeTitle = () => {
    const array = [...todos];
    return array.reduce(
      (res, obj) => (obj.id === valueId ? obj.title : res),
      ""
    );
  };

  const onchange = (event: any) => {
    event.preventDefault();
    setValueId(false);
    changeTodo(inputValue, Number(valueId));
    setInputValue("");
  };

  return (
    <form className="change" onSubmit={(e) => onchange(e)}>
      <input
        autoFocus
        className="inputs"
        defaultValue={changeTitle()}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default ChangeForm;
