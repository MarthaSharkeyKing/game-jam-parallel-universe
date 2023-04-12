const getRoot = (state) => state.gameStateReducer;

export const getTimeRemaining = (state) => getRoot(state).timeRemaining;

export const getGameOver = (state) => getRoot(state).gameOver;
