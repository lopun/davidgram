import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";
<<<<<<< HEAD
import user from "redux/modules/user";
=======
import users from "redux/modules/uesrs";
>>>>>>> eeb01426793a037d3e1e31d8e573c3c51db43466

//development or production
const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
<<<<<<< HEAD
  user,
=======
  users,
>>>>>>> eeb01426793a037d3e1e31d8e573c3c51db43466
  routing: routerReducer,
  i18nState
});

let store;
if (env === "development") {
  store = initialState =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();
