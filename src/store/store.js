import * as reduxModule from "redux";
import { applyMiddleware, compose, createStore } from "redux";
import createReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";

/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 */
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// create redux-saga
// const sagaMiddleware = createSagaMiddleware();

//
const enhancer = composeEnhancers(applyMiddleware(thunk)); //, sagaMiddleware

// store
const store = createStore(createReducer(), enhancer);

store.asyncReducers = {};

// then run the saga
// sagaMiddleware.run(mySaga);

// injectReducer
export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default store;
