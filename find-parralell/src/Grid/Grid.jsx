import './Grid.css';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from './selectors'
import * as actions from './slice'

const Grid = () => {  
    const dispatch = useDispatch()
    const cardInfo = useSelector(selectors.getCards);

    const handleClick = (positionId) => {
        console.log(positionId);
        dispatch(actions.setCardAsClicked(positionId))
    }

  return (
    <div className="Grid">
        {cardInfo.map(card => <button key={card.positionId} onClick={() => handleClick(card.positionId)}><Card  key={card.positionId} positionId={card.positionId} isOpen={card.clicked}/></button>)}
    </div>
  );
}

export default Grid;
