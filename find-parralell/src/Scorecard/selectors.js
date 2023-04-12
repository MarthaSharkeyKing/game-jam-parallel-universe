const getRoot = (state) => state.scoreReducer

export const getScore = (state) => getRoot(state).currentScore;

