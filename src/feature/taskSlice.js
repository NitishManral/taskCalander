import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
let taskId = 7;
const initialState = []

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.push({ id: taskId++, ...action.payload });
    },
    updateTask: (state, action) => {
        return state.map(task => 
            task.id === action.payload.id ? action.payload : task
        );
    },
    deleteTask: (state, action) => {
        return state.filter(task => task.id !== action.payload);
    },
    clearTask: () => initialState,
  },
});

export const { setTask, clearTask,updateTask,deleteTask } = taskSlice.actions;

export default taskSlice.reducer;