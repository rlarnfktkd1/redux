import {createStore, applyMiddleware, compose} from "redux"
import reducers from "./reducers.js";
import {routerMiddleware} from "connected-react-router";

const isDev = process.env.NODE_ENV === "development" || true;

const devtools =
  isDev && window.devToolsExtension
    ? window.devToolsExtension
    : () => fn => fn;

const configureStore = (initialState) => {

  const enhancer = [
    devtools({
      actionsBlacklist: ["trade/UPDATE_TICKER"],
      maxAge: 1000
    })
  ]

  const store = createStore(
    reducers,
    initialState,
    compose(...enhancer)
  )

  return store
}

export default configureStore