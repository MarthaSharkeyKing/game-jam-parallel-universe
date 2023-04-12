import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cards: [
        {positionId: 1, cardState: 'closed', pairId: 0},
        {positionId: 2, cardState: 'closed', pairId: 1},
        {positionId: 3, cardState: 'closed', pairId: 1},
        {positionId: 4, cardState: 'closed', pairId:2},
        {positionId: 5, cardState: 'closed', pairId:2},
        {positionId: 6, cardState: 'closed', pairId:3},
        {positionId: 7, cardState: 'closed', pairId:3},
        {positionId: 8, cardState: 'closed', pairId:4},
        {positionId: 9, cardState: 'closed', pairId:4},
        {positionId: 10, cardState: 'closed', pairId:5},
        {positionId: 11, cardState: 'closed', pairId:5},
        {positionId: 12, cardState: 'closed', pairId:6},
        {positionId: 13, cardState: 'closed', pairId:6},
        {positionId: 14, cardState: 'closed', pairId:7},
        {positionId: 15, cardState: 'closed', pairId:7},
        {positionId: 16, cardState: 'closed', pairId:8},
        {positionId: 17, cardState: 'closed', pairId:8},
        {positionId: 18, cardState: 'closed', pairId:9},
        {positionId: 19, cardState: 'closed', pairId:9},
        {positionId: 20, cardState: 'closed', pairId:10},
        {positionId: 21, cardState: 'closed', pairId:10},
        {positionId: 22, cardState: 'closed', pairId:11},
        {positionId: 23, cardState: 'closed', pairId:11},
        {positionId: 24, cardState: 'closed', pairId:12},
        {positionId: 25, cardState: 'closed', pairId:12},
    ],
    cardsOpen: []
}

export const gridSlice = createSlice({
  name: 'gridSlice',
  initialState,
  reducers: {
    setCardAsOpen: (state, action) => {
        if(action.payload.cardState === 'closed'){
                  state.cards = state.cards.map(card => {
        if((card.positionId === action.payload.positionId) && card.cardState === 'closed') {
            return ({...card, cardState: 'open'})
      }
      else return card
    });
    const cardsOpenIds = state.cardsOpen.map(card => card.positionId)
    if(!cardsOpenIds.includes(action.payload.positionId)){
        state.cardsOpen = [...state.cardsOpen, action.payload]
    }
        }

    },
    setCardsAsClosed: (state) => {
        state.cards = state.cards.map(card => {
          if(card.cardState === 'open') {
              return ({...card, cardState: 'closed'})
        }
        else return card
      });
      state.cardsOpen = []
    },
    setCardsAsMatched: (state) => {
        state.cards = state.cards.map(card => {
          if(card.cardState === 'open') {
              return ({...card, cardState: 'matched'})
        }
        else return card
      });
      state.cardsOpen = []
    }
  }
})

// each case under reducers becomes an action
export const { setCardAsOpen, setCardsAsClosed, setCardsAsMatched} = gridSlice.actions

export default gridSlice.reducer
