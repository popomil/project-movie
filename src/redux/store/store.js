import {createStore,applyMiddleware } from "redux";
import { moivesReducers } from "../reducers/movieReducer";
import { thunk } from "redux-thunk";


// 1- create store
export const store = createStore(moivesReducers,applyMiddleware(thunk))