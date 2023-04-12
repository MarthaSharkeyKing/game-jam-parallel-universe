import './Card.css';

import ClosedDoor from '../ClosedDoor/ClosedDoor';
import OpenDoor from '../OpenDoor/OpenDoor';

const Card = ({cardState, cardImage}) => {

    const getCards = () => {
        if(cardState === 'open') return <div className='open'><OpenDoor img={cardImage}/></div>
        else if (cardState ==='matched') return <div className='open'><OpenDoor img={cardImage}/></div>
        else return <div classname='closed'><ClosedDoor/></div>
    } 

  return (
    <div className="Card">
        {getCards()}
    </div>
  );
}

export default Card;
