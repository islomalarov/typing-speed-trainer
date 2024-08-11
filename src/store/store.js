// src/store/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Создаем слайс для текста и пользовательского ввода
const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    text: 'This is a sample text for typing.',
    userInput: '',
  },
  reducers: {
    updateUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    restart: (state) => {
      state.userInput = '';
    },
  },
});

export const { updateUserInput, restart } = typingSlice.actions;

const store = configureStore({
  reducer: {
    typing: typingSlice.reducer,
  },
});

export default store;
