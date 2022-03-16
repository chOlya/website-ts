import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import portfolioReducer from "./portfolio-reducer";

let reducers = combineReducers({
    portfolio: portfolioReducer,
});

export type ReduceState = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

