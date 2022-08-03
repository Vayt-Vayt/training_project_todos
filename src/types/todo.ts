export interface TodoState {
  todos:
    | [
        {
          title: string;
          id: number | any;
          completed: boolean;
        }
      ]
    | any;
  loading: boolean;
  limit: number;
  page: number;
  error: string | null;
  fetching: boolean;
  totalCount: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  TODO_PAGE = "TODO_PAGE",
  TODO_COMPLETED = "TODO_COMPLETED",
  REMOVE_TODOS = "REMOVE_TODOS",
  CHENGE_TODOS = "CHENGE_TODOS",
  SELECT_TODO_NAME = "SELECT_TODO_NAME",
  SELECT_TODO_ID = "SELECT_TODO_ID",
  NEW_ZADACHA_TODO = "NEW_ZADACHA_TODO",
  FETCHING_TODO_SHOW = "FETCHING_TODO_SHOW",
  FETCHING_TODO_HIDE = "FETCHING_TODO_HIDE",
  REQUEST_TODO = "REQUEST_TODO",
  REQUEST_PAGE = "REQUEST_PAGE",
}

interface SetPageTodo {
  type: TodoActionTypes.TODO_PAGE;
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSuccess {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: {
    data: [];
    totalCount: number;
  };
}

interface FetchTodoError {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface FetchTodoRemove {
  type: TodoActionTypes.REMOVE_TODOS;
  payload: number;
}

interface SetCompleted {
  type: TodoActionTypes.TODO_COMPLETED;
  payload: number;
}

interface ChangeTodo {
  type: TodoActionTypes.CHENGE_TODOS;
  payload: { title: string; id: number };
}

interface SelectTodoName {
  type: TodoActionTypes.SELECT_TODO_NAME;
}

interface SelectTodoId {
  type: TodoActionTypes.SELECT_TODO_ID;
}

interface NewZadacha {
  type: TodoActionTypes.NEW_ZADACHA_TODO;
  payload: { title: string; id: number };
}

interface FetchingTodoShow {
  type: TodoActionTypes.FETCHING_TODO_SHOW;
}

interface FetchingTodoHide {
  type: TodoActionTypes.FETCHING_TODO_HIDE;
}

interface RequestTodo {
  type: TodoActionTypes.REQUEST_TODO;
}

interface RequestPage {
  type: TodoActionTypes.REQUEST_PAGE;
}

export type ActionTodo =
  | FetchTodoAction
  | FetchTodoError
  | FetchTodoSuccess
  | SetPageTodo
  | FetchTodoRemove
  | SetCompleted
  | ChangeTodo
  | SelectTodoName
  | SelectTodoId
  | NewZadacha
  | FetchingTodoHide
  | FetchingTodoShow
  | RequestTodo
  | RequestPage;
