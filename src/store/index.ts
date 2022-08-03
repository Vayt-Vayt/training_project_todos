import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./saga/sagas";

const saga = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(thunk, saga));

saga.run(sagaWatcher);
