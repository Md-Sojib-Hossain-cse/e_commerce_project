// // redux/store.ts
// import { configureStore, combineReducers } from "@reduxjs/toolkit"
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist"
// import storage from "redux-persist/lib/storage" // defaults to localStorage for web
// import { setupListeners } from "@reduxjs/toolkit/query"

// // RTK Query APIs
// import { baseApi } from "./api/baseApi" // your older baseApi

// // Reducers
// import authReducer from "./featured/auth/authSlice"
// import usersReducer from "./featured/user/userSlice"
// import cartReducer from "./featured/cart/cartSlice"

// // Persist configuration (only persist cart)
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
//   whitelist: ["cart"],
// }

// // Combine all reducers
// const rootReducer = combineReducers({
//   cart: cartReducer,
//   auth: authReducer,
//   users: usersReducer,
//   [baseApi.reducerPath]: baseApi.reducer,
// })

// // Persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// // Configure store
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(baseApi.middleware),
//   devTools: process.env.NODE_ENV !== "production",
// })

// // Persistor
// export const persistor = persistStore(store)

// // Setup listeners for RTK Query
// setupListeners(store.dispatch)

// // Types
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
