import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { courseApi } from "./services/courses";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(courseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
