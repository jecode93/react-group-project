import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/rocketcard.css';
import { useDispatch, useSelector } from 'react-redux';
import { rocketsReserve } from '../redux/rockets/rocketsSlice';

const RocketCard = ({
  id, name, description, image,
}) => {
  const [isReserved, setIsReserved] = useState(false);
  const { rockets } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  const handleClick = (articleId) => {
    dispatch(rocketsReserve(articleId));
    rockets.map(({ reserved }) => {
      if (reserved === isReserved) {
        setIsReserved(true);
      } else {
        setIsReserved(false);
      }
      return reserved;
    });
  };

  return (
    <article key={id} className="rocket-card">
      <img src={image} width={300} alt={name} />
      <div className="info">
        <h2 className="title">{name}</h2>
        <p className="desc">
          {isReserved && <span className="reserved">Reserved</span>}
          {description}
        </p>
        <button type="button" onClick={() => handleClick(id)}>
          {!isReserved && <span className="btn">Reserve Rocket</span>}
          {isReserved && <span className="btn-cancel">Cancel Reservation</span>}
        </button>
      </div>
    </article>
  );
};

RocketCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RocketCard;
