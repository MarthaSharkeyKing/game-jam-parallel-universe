import './Grid.css';
import Card from '../Card/Card';

const Grid = () => {
    const cardInfo = [
        {positionId: 1},
        {positionId: 2},
        {positionId: 3},
        {positionId: 4},
        {positionId: 5},
        {positionId: 6},
        {positionId: 7},
        {positionId: 8},
        {positionId: 9},
        {positionId: 10},
        {positionId: 11},
        {positionId: 12},
        {positionId: 13},
        {positionId: 14},
        {positionId: 15},
        {positionId: 16},
        {positionId: 17},
        {positionId: 18},
        {positionId: 19},
        {positionId: 20},
        {positionId: 21},
        {positionId: 22},
        {positionId: 23},
        {positionId: 24},
        {positionId: 25},
    ]
  return (
    <div className="Grid">
        {cardInfo.map(card => <button><Card positionId={card.positionId}/></button>)}
    </div>
  );
}

export default Grid;
