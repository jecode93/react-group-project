import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';
import RocketCard from '../RocketCard';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const rocketQuery = rockets.map((item) => (
    <RocketCard
      key={item.id}
      name={item.name}
      description={item.description}
      image={item.image}
    />
  ));

  return (
    <div className="inside">
      { rocketQuery }
    </div>
  );
};

export default Rockets;
