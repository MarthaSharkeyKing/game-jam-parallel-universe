import "./Grid.css";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import * as selectors from "./selectors";
import * as gameStateSelectors from "../GameState/selectors";
import * as actions from "./slice";
import * as scoreActions from "../Scorecard/slice";
import { useEffect, useState } from "react";

const Grid = () => {
  const dispatch = useDispatch();
  const gameOver = useSelector(gameStateSelectors.getGameOver);
  const cardInfo = useSelector(selectors.getCards);
  const openCards = useSelector(selectors.getCardsOpen);

  const handleClick = (card) => {
    if (openCards.length < 2) {
      dispatch(actions.setCardAsOpen(card));
    }
  };

  useEffect(() => {
    if (!gameOver && openCards.length === 2) {
      if (openCards[0].pairId === openCards[1].pairId) {
        dispatch(actions.setCardsAsMatched());
        dispatch(scoreActions.increaseScore());
      } else {
        dispatch(scoreActions.decreaseScore());
        setTimeout(() => dispatch(actions.setCardsAsClosed()), 1000);
      }
    }
  }, [openCards]);

  return (
    <div className="Grid">
      {cardInfo.map((card) => (
        <button key={card.positionId} onClick={() => handleClick(card)}>
          <Card
            key={card.positionId}
            positionId={card.positionId}
            cardState={card.cardState}
          />
        </button>
      ))}
    </div>
  );
};

export default Grid;
