import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cards: [
        {positionId: 1, clicked: false},
        {positionId: 2, clicked: false},
        {positionId: 3, clicked: false},
        {positionId: 4, clicked: false},
        {positionId: 5, clicked: false},
        {positionId: 6, clicked: false},
        {positionId: 7, clicked: false},
        {positionId: 8, clicked: false},
        {positionId: 9, clicked: false},
        {positionId: 10, clicked: false},
        {positionId: 11, clicked: false},
        {positionId: 12, clicked: false},
        {positionId: 13, clicked: false},
        {positionId: 14, clicked: false},
        {positionId: 15, clicked: false},
        {positionId: 16, clicked: false},
        {positionId: 17, clicked: false},
        {positionId: 18, clicked: false},
        {positionId: 19, clicked: false},
        {positionId: 20, clicked: false},
        {positionId: 21, clicked: false},
        {positionId: 22, clicked: false},
        {positionId: 23, clicked: false},
        {positionId: 24, clicked: false},
        {positionId: 25, clicked: false},
    ]
}

export const gridSlice = createSlice({
  name: 'gridSlice',
  initialState,
  reducers: {
    setCardAsClicked: (state, action) => {
      state.cards = state.cards.map(card => {
        if(card.positionId === action.payload) {
            return ({positionId: card.positionId, clicked: !card.clicked})
      }
      else return card
    })
    },

  },
})

// each case under reducers becomes an action
export const { setCardAsClicked } = gridSlice.actions

export default gridSlice.reducer
