import {combineReducers} from "redux";
import {CounterReducer, CounterReducer1} from "../components/Counter/Counter.Store";

// All reducers should be included here
export const AppStore = combineReducers({CounterReducer, CounterReducer1});