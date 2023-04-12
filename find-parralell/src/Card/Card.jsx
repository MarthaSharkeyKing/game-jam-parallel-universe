import './Card.css';

import ClosedDoor from '../ClosedDoor/ClosedDoor';
import OpenDoor from '../OpenDoor/OpenDoor';

const Card = ({positionId, isOpen}) => {
  return (
    <div className="Card">
        {isOpen ? 
            <div className='open'><OpenDoor/></div>
            :
            <div classname='closed'><ClosedDoor/></div>
            }
    </div>
  );
}

export default Card;
