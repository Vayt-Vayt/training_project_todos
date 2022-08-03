import { ActionTodo, TodoActionTypes, TodoState } from "../../types/todo";

export const initialState: TodoState = {
  todos: [
    {
      title: "buy potatoes",
      id: 0,
      completed: false,
    },
  ],
  loading: false,
  error: null,
  limit: 15,
  page: 1,
  fetching: true,
  totalCount: 0,
};

export const reducerTodo = (
  state = initialState,
  action: ActionTodo
): TodoState => {
  let array = [...state.todos];
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      const state2 = {
        todos: [...array, ...action.payload.data],
        totalCount: Number(action.payload.totalCount),
        loading: false,
      };
      return { ...state, ...state2 };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.TODO_PAGE:
      return { ...state, page: state.page + 1 };
    case TodoActionTypes.TODO_COMPLETED:
      return {
        ...state,
        todos: array.map((obj: { id: number; completed: any }) =>
          obj.id === action.payload
            ? { ...obj, completed: !obj.completed }
            : obj
        ),
      };
    case TodoActionTypes.REMOVE_TODOS:
      return {
        ...state,
        todos: array.filter(
          (array: { id: number }) => array.id !== action.payload
        ),
      };
    case TodoActionTypes.CHENGE_TODOS:
      return {
        ...state,
        todos: array.map((obj) =>
          obj.id === action.payload.id
            ? action.payload.title !== ""
              ? {
                  ...obj,
                  title: action.payload.title,
                  completed: !obj.completed,
                }
              : obj
            : obj
        ),
      };
    case TodoActionTypes.SELECT_TODO_NAME:
      return {
        ...state,
        todos: array.sort((a: { title: string }, b: { title: string }) =>
          a.title.localeCompare(b.title)
        ),
      };
    case TodoActionTypes.SELECT_TODO_ID:
      return {
        ...state,
        todos: array.sort(
          (a: { id: number }, b: { id: number }) => a.id - b.id
        ),
      };
    case TodoActionTypes.NEW_ZADACHA_TODO:
      const newArray = {
        title: action.payload.title,
        id: action.payload.id,
        completed: false,
      };
      return { ...state, todos: [...array, newArray] };
    case TodoActionTypes.FETCHING_TODO_SHOW:
      return { ...state, fetching: true };
    case TodoActionTypes.FETCHING_TODO_HIDE:
      return { ...state, fetching: false };

    default:
      return state;
  }
};
