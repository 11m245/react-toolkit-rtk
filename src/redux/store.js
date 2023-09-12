import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import { postsApi } from "./services/postsApiSlice";

export const store = configureStore({
  reducer: { posts: postReducer, [postsApi.reducerPath]: postsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
