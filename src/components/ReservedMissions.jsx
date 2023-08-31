import React from 'react';
import { useSelector } from 'react-redux';
import './styles/reserved.css';

const ReservedMissions = () => {
  const { missions } = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((list) => list.reserved === true);

  return (
    <sections>
      <h2>My Missions</h2>
      <ul className="mission-list">
        {reservedMissions.map((mission) => {
          const { id, name } = mission;
          return <li key={id} className="mission-name">{name}</li>;
        })}
      </ul>
    </sections>
  );
};

export default ReservedMissions;
