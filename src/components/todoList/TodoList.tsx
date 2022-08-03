import React, { useEffect, useRef } from "react";
import Alert from "../alert/Alert";
import { useActions } from "../hooks/useActions";
import userScroll from "../hooks/useScroll";
import { useTypedSelector } from "../hooks/useTypeSelector";
import Loader from "../loader/Loader";
import "./TodoList.css";
import TodoMap from "./TodoMap";

const TodoList: React.FC = () => {
  const { fetchTodos, setComplet, showFetching, fetchPage } = useActions();
  const { error, loading, todos, fetching, totalCount } = useTypedSelector(
    (state) => state.todo
  );
  const parentRef: any = useRef();
  const childRef: any = useRef();
  const intersected = userScroll(
    parentRef,
    childRef,
    fetching,
    error,
    totalCount,
    todos,
    () => fetchPage(),
    () => showFetching()
  );

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) {
    return <Loader text={"Идет загрузка..."} />;
  }

  if (error) {
    return (
      <div className="alert_margin">
        <Alert props={error} />
      </div>
    );
  }

  return (
    <div className="titleList">
      <div ref={parentRef}>
        <TodoMap setComplet={setComplet} todos={todos} />
        <div ref={childRef} />
      </div>
    </div>
  );
};

export default TodoList;
