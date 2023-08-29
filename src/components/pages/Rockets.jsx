import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRockets } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="inside">
      { rockets.map((item) => (
        item.name
      ))}
    </div>
  );
};

export default Rockets;
