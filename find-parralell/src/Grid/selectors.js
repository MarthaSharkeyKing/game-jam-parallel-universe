const getRoot = (state) => state.gridReducer

export const getCards = (state) => getRoot(state).cards