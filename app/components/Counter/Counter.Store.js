import {createReducer, createAction} from "redux-act";
import {fromJS} from "immutable";

export const add = createAction("add some stuff");
export const increment = createAction("increment");
export const decrement = createAction("decrement");

const initialState = fromJS({
    value: 0
});

export const CounterReducer = createReducer({
    [add]: (state, payload) => state.set("value", state.get("value")+payload),
    [increment]: (state) => state.set("value", state.get("value")+1),
    [decrement]: (state) => state.set("value", state.get("value")+1)
}, initialState);

export const CounterReducer1 = createReducer({
    [add]: (state, payload) => state.set("value", state.get("value")+payload),
    [increment]: (state) => state.set("value", state.get("value")+1),
    [decrement]: (state) => state.set("value", state.get("value")+1)
}, initialState);
