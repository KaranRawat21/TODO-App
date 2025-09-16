import { createSelector, createSlice } from "@reduxjs/toolkit";


const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: {
    list: [
      {
        id: crypto.randomUUID(),
        todo: "Complete online Javascript course",
        isComplete: true,
      },
      {
        id: crypto.randomUUID(),
        todo: "Create a toDo app",
        isComplete: false,
      },
      {
        id: crypto.randomUUID(),
        todo: "Learn Redux toolkit",
        isComplete: false,
      },
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      const newToDo = {
        id: crypto.randomUUID(),
        todo: action.payload,
        isComplete: false,
      }
      state.list.push(newToDo)
    },
    deleteToDo: (state, action) => {
      state.list = state.list.filter(todo => todo.id !== action.payload)
    },
    clearCompletedTasks: (state) => {
      state.list = state.list.filter(todo => todo.isComplete !== true)
    },
    toggleComplete: (state, action) => {
      const clickedToDo = state.list.find(todo => todo.id === action.payload);
      clickedToDo.isComplete = !clickedToDo.isComplete
    }

  }
}
)


const selectToDoList = (state) => state.toDoList.list;
const selectFilter = (state) => state.filter;

export const getToDoList = createSelector(
  [selectToDoList, selectFilter],
  (list, selectedFilter) => {
    if (selectedFilter === "All") {
      return list
    } else if (selectedFilter === "Active") {
      return list.filter(todo => todo.isComplete === false)
    } else {
      return list.filter(todo => todo.isComplete === true)
    }
  }
)

export const { addTodo, deleteToDo, clearCompletedTasks, toggleComplete } = toDoListSlice.actions;
export default toDoListSlice.reducer;