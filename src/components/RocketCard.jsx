import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/rocketcard.css';
import { useDispatch, useSelector } from 'react-redux';
import { rocketsReserve } from '../redux/rockets/rocketsSlice';

const RocketCard = ({
  id, name, description, image,
}) => {
  const [reservation, setReservation] = useState('Reserve Rocket');
  const [reservedText, setReservedText] = useState('Reserved');
  const [isReserved, setIsReserved] = useState(false);
  const { rockets } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(rocketsReserve(id));
    rockets.map((rocket) => {
      if (rocket.reserved === isReserved) {
        setIsReserved(true);
        const reserve = document.querySelector('.reserved');
        // const cancel = document.querySelector('.btn-cancel');
        reserve.style.display = 'inline-block';
        setReservation('Cancel Reservation');
        setReservedText('Reserved');
        // cancel.classList.remove('btn');
        // cancel.classList.add('btn-cancel');
        console.log(`${rocket.reserved} ${rocket.id}`);
      } else {
        setIsReserved(false);
        const reserve = document.querySelector('.reserved');
        // const cancel = document.querySelector('.btn-cancel');
        setReservation('Reserve Rocket');
        setReservedText('Reserved');
        reserve.style.display = 'none';
        // cancel.classList.add('btn');
        // cancel.classList.remove('btn-cancel');
      }
      return rocket;
    });
  };

  return (
    <article className="rocket-card">
      <img src={image} width={300} alt={name} />
      <div className="info">
        <h2 className="title">{name}</h2>
        <p className="desc">
          <span className="reserved">{reservedText}</span>
          {description}
        </p>
        <button type="button" className="btn" onClick={handleClick}>{reservation}</button>
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
