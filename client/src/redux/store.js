// import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Reducer } from "./Reducers";
// import {thunk} from "redux-thunk";
// import logger from "redux-logger";

// const rootreducer = combineReducers({user:Reducer});
// const Store=configureStore({reducer:rootreducer, middleware: [thunk, logger]})


// const store = configureStore({
//     reducer: rootreducer,
//     middleware: middleware, // Pass the middleware callback function here
//   });
  



import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({ reducer: Reducer })

export default store;
