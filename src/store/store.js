import { configureStore, createSlice } from '@reduxjs/toolkit';

const calculateWPM = (charsTyped, timeElapsed) => {
  const wordsTyped = charsTyped / 5;
  return Math.round((wordsTyped / timeElapsed) * 60); // WPM formula
};

const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    text: 'This is a sample text for typing.',
    userInput: '',
    startTime: null,
    errorCount: 0,
    wpm: 0,
  },
  reducers: {
    updateUserInput: (state, action) => {
      const newUserInput = action.payload;

      // Если ввод начинается, фиксируем время старта
      if (state.startTime === null) {
        state.startTime = new Date().getTime();
      }

      // Обновляем количество ошибок
      const newErrorCount = newUserInput
        .split('')
        .reduce(
          (acc, char, idx) => (char !== state.text[idx] && idx < state.text.length ? acc + 1 : acc),
          0,
        );

      // Обновляем WPM
      const timeElapsed = (new Date().getTime() - state.startTime) / 1000 / 60;
      const wpm = calculateWPM(newUserInput.length, timeElapsed);

      // Обновляем состояние
      state.userInput = newUserInput;
      state.errorCount = newErrorCount;
      state.wpm = wpm;
    },
    restart: (state) => {
      state.userInput = '';
      state.startTime = null;
      state.errorCount = 0;
      state.wpm = 0;
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
