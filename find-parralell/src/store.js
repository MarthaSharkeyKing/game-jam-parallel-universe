import { configureStore } from '@reduxjs/toolkit'
import gridReducer from './Grid/slice';
import scoreReducer from './Scorecard/slice';

const store = configureStore({
  reducer: {gridReducer, scoreReducer},

})

export default store