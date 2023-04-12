import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeRemaining: 60,
  gameOver: false,
};

export const gameStateSlice = createSlice({
  name: "scoreSlice",
  initialState,
  reducers: {
    resetGame: (state) => {
      state.timeRemaining = 60;
      state.gameOver = false;
    },
    increaseTime: (state, action) => {
      state.timeRemaining += action.payload;
    },
    decreaseTime: (state) => {
      state.timeRemaining -= 1;
      if (state.timeRemaining <= 0) {
        state.gameOver = true;
      }
    },
  },
});

// each case under reducers becomes an action
export const { resetGame, increaseTime, decreaseTime } = gameStateSlice.actions;

export default gameStateSlice.reducer;
