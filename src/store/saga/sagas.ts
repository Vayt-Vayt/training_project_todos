import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { TodoActionTypes } from "../../types/todo";
import { hideFetching, setTodoPage } from "../action_creators/todo";
import { store } from "..";

export function* sagaWatcher() {
  yield takeEvery(TodoActionTypes.REQUEST_TODO, sagaWorker);
  yield takeEvery(TodoActionTypes.REQUEST_PAGE, sagaPage);
}
function* sagaWorker() {
  const state = store.getState().todo;
  const page = state.page;
  try {
    yield put({ type: TodoActionTypes.FETCH_TODOS });
    const payload: any[] = yield call(() => fetchTodoss(page));
    yield put({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: payload });
    yield put(setTodoPage());
  } catch (e) {
    yield put({
      type: TodoActionTypes.FETCH_TODOS_ERROR,
      payload: "Произошла ошибка при загрузке",
    });
  } finally {
    yield put(hideFetching());
  }
}

async function fetchTodoss(page: number) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?_limit=${15}&_page=${page}`
  );
  return {
    data: response.data,
    totalCount: response.headers["x-total-count"],
  };
}

function* sagaPage() {
  const state = store.getState().todo;
  const page = state.page;
  try {
    const payload: any[] = yield call(() => fetchTodoss(page));
    yield put({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: payload });
    yield put(setTodoPage());
  } catch (e) {
    yield put({
      type: TodoActionTypes.FETCH_TODOS_ERROR,
      payload: "Произошла ошибка при загрузке",
    });
  } finally {
    yield put(hideFetching());
  }
}
