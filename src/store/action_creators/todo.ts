import { ActionTodo, TodoActionTypes } from "../../types/todo";

export function fetchTodos() {
  return { type: TodoActionTypes.REQUEST_TODO };
}

export function fetchPage() {
  return { type: TodoActionTypes.REQUEST_PAGE };
}

export function setTodoPage(): ActionTodo {
  return { type: TodoActionTypes.TODO_PAGE };
}

export function setComplet(id: number): ActionTodo {
  return { type: TodoActionTypes.TODO_COMPLETED, payload: id };
}

export function removeTodo(id: number): ActionTodo {
  return { type: TodoActionTypes.REMOVE_TODOS, payload: id };
}

export function changeTodo(title: string, id: number): ActionTodo {
  return {
    type: TodoActionTypes.CHENGE_TODOS,
    payload: { title: title, id: id },
  };
}

export function selectedSortName(): ActionTodo {
  return { type: TodoActionTypes.SELECT_TODO_NAME };
}

export function selectedSortId(): ActionTodo {
  return { type: TodoActionTypes.SELECT_TODO_ID };
}
export function newZadachaTodo(title: string, id: number): ActionTodo {
  return {
    type: TodoActionTypes.NEW_ZADACHA_TODO,
    payload: { title: title, id: id },
  };
}

export function showFetching(): ActionTodo {
  return { type: TodoActionTypes.FETCHING_TODO_SHOW };
}

export function hideFetching(): ActionTodo {
  return { type: TodoActionTypes.FETCHING_TODO_HIDE };
}
