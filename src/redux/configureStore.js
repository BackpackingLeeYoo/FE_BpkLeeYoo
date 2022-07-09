//configureStore.js
import {
  combineReducers,
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";

import Mypage from "./modules/mypage";

import thunk from "redux-thunk";

import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  mypage: Mypage,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export default store;
