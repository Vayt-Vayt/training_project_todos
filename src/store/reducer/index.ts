import { combineReducers } from "redux";
import { reducerTodo } from "./reducerTodo";


export const rootReducer = combineReducers({
    todo: reducerTodo,
})

export type RootState = ReturnType<typeof rootReducer> 