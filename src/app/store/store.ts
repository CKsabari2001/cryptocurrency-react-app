import { configureStore } from "@reduxjs/toolkit";

// cryptoApi
import { cryptoApi } from "./services/cryptoApi.ts";
import { cryptoNewsApi } from "./services/cryptoNewsApi.ts";

// Slice Reducers
import newsSelectReducer from "./features/newsSelect.ts";
import chartSelectReducer from "./features/chartSelect.ts";
export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    newsSelect: newsSelectReducer,
    chartSelect: chartSelectReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware
    ),
});

// Export Type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
