import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authorization/auth-slice";
import { createLogger } from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contacts-reducer";
import { filterSlice, usersApi } from "./todos/todoSlice";

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const contactsPersistConfig = {
  key: "items",
  storage,
  whitelist: ["items"],
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSliceReducer),
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    [usersApi.reducerPath]: usersApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
