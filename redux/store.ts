import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

import authReducer from "./features/auth/authSlice"
import cartReducer from "./features/cart/cartSlice"
// import wishlistReducer from "./features/wishlist/wishlistSlice"

import { baseApi } from "./api/baseApi"

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  // wishlist: wishlistReducer,

  // RTK Query
  [baseApi.reducerPath]: baseApi.reducer,
})

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart", "wishlist"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
        ],
      },
    }).concat(baseApi.middleware),
})

export const persistor = persistStore(store)

// Types
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
