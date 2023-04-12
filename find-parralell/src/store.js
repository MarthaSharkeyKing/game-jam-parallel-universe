import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./Grid/slice";
import scoreReducer from "./Scorecard/slice";
import gameStateReducer from "./GameState/slice";

const store = configureStore({
  reducer: { gridReducer, scoreReducer, gameStateReducer },
});

export default store;
