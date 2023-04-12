import { createSlice } from "@reduxjs/toolkit";
import * as _ from 'lodash';

const cardInit = [
    { positionId: 1, cardState: "oops", pairId: 0 },
    {
      positionId: 2,
      cardState: "closed",
      pairId: 1,
      img: "./strangerthings1.jpg",
    },
    {
      positionId: 3,
      cardState: "closed",
      pairId: 1,
      img: "./strangerthings2.jpg",
    },
    { positionId: 4, cardState: "closed", pairId: 2, img: "./drwho1.jpg" },
    { positionId: 5, cardState: "closed", pairId: 2, img: "./drwho2.jpg" },
    { positionId: 6, cardState: "closed", pairId: 3, img: "./heaven.jpg" },
    { positionId: 7, cardState: "closed", pairId: 3, img: "./hell.jpg" },
    { positionId: 8, cardState: "closed", pairId: 4, img: "./narnia1.jpg" },
    { positionId: 9, cardState: "closed", pairId: 4, img: "./narnia2.jpg" },
    { positionId: 10, cardState: "closed", pairId: 5, img: "./minc1.webp" },
    { positionId: 11, cardState: "closed", pairId: 5, img: "./minc2.jpg" },
    { positionId: 12, cardState: "closed", pairId: 6, img: "./darkm1.jpg" },
    { positionId: 13, cardState: "closed", pairId: 6, img: "./darkm2.jpg" },
    { positionId: 14, cardState: "closed", pairId: 7, img: "./alice1.jpg" },
    { positionId: 15, cardState: "closed", pairId: 7, img: "./alice2.png" },
    { positionId: 16, cardState: "closed", pairId: 8, img: "./futreama1.webp" },
    { positionId: 17, cardState: "closed", pairId: 8, img: "./futreama2.jpg" },
    { positionId: 18, cardState: "closed", pairId: 9, img: "./spacejam1.jpg" },
    { positionId: 19, cardState: "closed", pairId: 9, img: "./spacejam2.jpg" },
    {
      positionId: 20,
      cardState: "closed",
      pairId: 10,
      img: "./drstrange1.webp",
    },
    {
      positionId: 21,
      cardState: "closed",
      pairId: 10,
      img: "./drstrange2.jpg",
    },
    { positionId: 22, cardState: "closed", pairId: 11, img: "./spider1.jpg" },
    { positionId: 23, cardState: "closed", pairId: 11, img: "./spider2.jpg" },
    { positionId: 24, cardState: "closed", pairId: 12, img: "./trek1.webp" },
    { positionId: 25, cardState: "closed", pairId: 12, img: "./trek2.jpg" },
  ]
const initialState = {
  cards: _.shuffle(cardInit),
  cardsOpen: [],
};

export const gridSlice = createSlice({
  name: "gridSlice",
  initialState,
  reducers: {
    resetGrid: (state) => {
      state.cards = state.cards.map((card) => {
        return { ...card, cardState: "closed" };
      });
      state.cardsOpen = [];
    },
    setCardAsOpen: (state, action) => {
      if (action.payload.cardState === "closed") {
        state.cards = state.cards.map((card) => {
          if (
            card.positionId === action.payload.positionId &&
            card.cardState === "closed"
          ) {
            return { ...card, cardState: "open" };
          } else return card;
        });
        const cardsOpenIds = state.cardsOpen.map((card) => card.positionId);
        if (!cardsOpenIds.includes(action.payload.positionId)) {
          state.cardsOpen = [...state.cardsOpen, action.payload];
        }
      }
    },
    setCardsAsClosed: (state) => {
      state.cards = state.cards.map((card) => {
        if (card.cardState === "open") {
          return { ...card, cardState: "closed" };
        } else return card;
      });
      state.cardsOpen = [];
    },
    setCardsAsMatched: (state) => {
      state.cards = state.cards.map((card) => {
        if (card.cardState === "open") {
          return { ...card, cardState: "matched" };
        } else return card;
      });
      state.cardsOpen = [];
    },
  },
});

// each case under reducers becomes an action
export const { resetGrid, setCardAsOpen, setCardsAsClosed, setCardsAsMatched } =
  gridSlice.actions;

export default gridSlice.reducer;
