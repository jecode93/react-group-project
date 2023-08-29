import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, rocketsReserve } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketReducer.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets]);

  const ReserveBtn = (id) => {
    dispatch(rocketsReserve(id));
  };

  return (
    <div className="inside">
      <h1>Rockets</h1>

      {rockets.map(({
        id, reserved,
      }) => (
        <div key={id}>
          {reserved && <button type="button">Reserved</button>}
          <button type="button" onClick={() => ReserveBtn(id)}>
            {reserved && <span>Cancel Reservation</span>}
            {!reserved && <span> Reserve</span>}
          </button>
        </div>

      ))}
    </div>
  );
};

export default Rockets;
