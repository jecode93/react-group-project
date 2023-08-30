import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMission, missionReserve } from '../../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMission());
    }
  }, [dispatch, missions]);

  const jetclick = (id) => {
    dispatch(missionReserve(id));
  };
  return (
    <div className="inside">
      <h1>Missions</h1>
      {missions.map(({ id, reserved }) => (
        <div key={id}>
          <button type="button">
            {reserved ? 'Active Member' : 'Not A Member'}
          </button>
          <button onClick={() => { jetclick(id); }} type="button">
            {reserved ? 'Leave Missions' : 'Join Mision'}
          </button>
        </div>

      ))}
    </div>
  );
};

export default Missions;
