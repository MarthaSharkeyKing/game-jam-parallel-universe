import './Card.css';

const Card = ({positionId}) => {
  return (
    <div className="Card grid-item">
        <>{positionId}</>
    </div>
  );
}

export default Card;
