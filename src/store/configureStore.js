import {createStore, applyMiddleware, compose} from "redux";
import ReduxPromise from 'redux-promise';

import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

export default function configureStore(preloadedState) {
  const middlewares = [ReduxPromise];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = compose(...storeEnhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancer
  );

  return store;
}
