import React from 'react';
import { useSelector } from 'react-redux';
import './styles/reserved.css';

const ReservedRockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((list) => list.reserved === true);

  return (
    <sections>
      <h2>My Rockets</h2>
      <ul className="mission-list">
        {reservedRockets.map((list) => {
          const { id, name } = list;
          return <li key={id} className="mission-name">{name}</li>;
        })}
      </ul>
    </sections>
  );
};

export default ReservedRockets;
