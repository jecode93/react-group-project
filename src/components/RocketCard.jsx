import React from 'react';
import './styles/rocketcard.css';
import { useDispatch, useSelector } from 'react-redux';
import { rocketsReserve } from '../redux/rockets/rocketsSlice';

const RocketCard = () => {
  const { rockets } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  const handleClick = (articleId) => {
    dispatch(rocketsReserve(articleId));
  };

  return (
    <article>
      { rockets.map(({
        id, name, description, image, reserved,
      }) => (
        <div key={id} className="rocket-card">
          <img src={image} width={300} alt={name} />
          <div className="info">
            <h2 className="title">{name}</h2>
            <p className="desc">
              {reserved && <span className="reserved">Reserved</span>}
              {description}
            </p>
            <button type="button" onClick={() => handleClick(id)}>
              {!reserved ? <span className="btn">Reserve Rocket</span> : <span className="btn-cancel">Cancel Reservation</span> }
            </button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default RocketCard;
