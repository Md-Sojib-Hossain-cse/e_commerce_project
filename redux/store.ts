// // redux/store.ts
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { setupListeners } from "@reduxjs/toolkit/query";


// // Reducers

// // Persist configuration (only persist cart)
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   whitelist: ["cart"],
// };

// // Combine all reducers
// const rootReducer = combineReducers({
//   cart: cartReducer,
// });

// // Persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Configure store
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV !== "production",
// });

// // Persistor
// export const persistor = persistStore(store);

// // Setup listeners for RTK Query
// setupListeners(store.dispatch);

// // Types
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
