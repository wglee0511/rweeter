import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { connectRouter } from "connected-react-router";
import post from "./modules/post";
import image from "./modules/image";
import like from "./modules/like";

export const history = createBrowserHistory();

const middlewares = [
  thunk.withExtraArgument({
    history,
  }),
];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  user: user.reducer,
  post: post.reducer,
  image: image.reducer,
  like: like.reducer,
  router: connectRouter(history),
});

const store = configureStore({
  reducer,
  middleware: middlewares,
});

export default store;
