import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import toDoListReducer from "./features/toDoListSlice";
import filterReducer from "./features/filterSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    toDoList: toDoListReducer,
    filter: filterReducer,
  }
})