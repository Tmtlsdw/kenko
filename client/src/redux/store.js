import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer.js";
import rootSaga from "./root-saga.js";

const sagaMidddleware = createSagaMiddleware();
const middlewares = [sagaMidddleware];

if (process.env.NODE_ENV === "development") middlewares.push(logger);
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMidddleware.run(rootSaga);
export const persistor = persistStore(store);
