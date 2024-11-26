import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [
      {
        id: 1,
        text: "Setup Redux Store",
        status: "delegate",
        completed: false,
        isEditing: false,
      },
    ],
  },
  reducers: {
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
  },
});

export const { addTask, editTask, deleteTask, toggleComplete } =
  tasksSlice.actions;
export default tasksSlice.reducer;
