const getRoot = (state) => state.gridReducer

export const getCards = (state) => getRoot(state).cards

export const getCardsOpen = (state) => getRoot(state).cardsOpen