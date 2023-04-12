import { configureStore } from '@reduxjs/toolkit'
import gridReducer from './Grid/slice';

const store = configureStore({
  reducer: {gridReducer},

})

export default store