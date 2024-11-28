import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    setTasks: (state, action) => {
      state.items = action.payload;
    },
    addTask: (state, action) => {
      state.items.push({ ...action.payload, isEditing: true });
    },
    editTask: (state, action) => {
      state.items = state.items.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text, isEditing: false }
          : task
      );
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      state.items = state.items.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },
    toggleEdit: (state, action) => {
      state.items = state.items.map((task) =>
        task.id === action.payload
          ? { ...task, isEditing: !task.isEditing }
          : task
      );
    },
  },
});

export const {
  setTasks,
  addTask,
  editTask,
  deleteTask,
  toggleComplete,
  toggleEdit,
} = tasksSlice.actions;
export default tasksSlice.reducer;
