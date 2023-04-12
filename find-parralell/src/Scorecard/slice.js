import { createSlice } from '@reduxjs/toolkit'

const initialState = {
currentScore: 0,
scoreIncrement: 5,
scoreDecrement: -1
}

export const scoreSlice = createSlice({
  name: 'scoreSlice',
  initialState,
  reducers: {
    resetScore: (state) => {
        state.currentScore = 0
        state.scoreIncrement = 5
        state.scoreDecrement= -1
    },
    increaseScore: (state) => {
        state.currentScore = state.currentScore + state.scoreIncrement
        state.scoreIncrement +=1
    },
    decreaseScore: (state) => {
        state.currentScore = state.currentScore + state.scoreDecrement
        state.scoreIncrement = 5
    },
  }
})

// each case under reducers becomes an action
export const {resetScore, increaseScore, decreaseScore } = scoreSlice.actions

export default scoreSlice.reducer
