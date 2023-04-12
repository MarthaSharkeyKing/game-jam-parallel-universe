const getRoot = (state) => state.scoreReducer;

export const getScore = (state) => getRoot(state).currentScore;
export const getHighScores = (state) => getRoot(state).highScores;
