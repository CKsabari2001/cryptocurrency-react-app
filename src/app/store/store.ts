import { configureStore } from "@reduxjs/toolkit";
import sidebarSliceReducer from "./features/sidebar/sidebarSlice";

// cryptoApi
import { cryptoApi } from "./services/cryptoApi.ts";
export const store = configureStore({
  reducer: {
    sidebar: sidebarSliceReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});

// Export Type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
