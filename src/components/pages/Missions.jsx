import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { missionReserve } from '../../redux/missions/missionsSlice';
import '../styles/missions.css';

const Missions = () => {
  const style = {
    width: 150,
    verticalAlign: 'middle',
    textAlign: 'center',
  };

  const [isReserved, setIsReserved] = useState(false);
  const { missions } = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  const handleClick = (articleId) => {
    dispatch(missionReserve(articleId));
    missions.map(({ reserved }) => {
      if (reserved === isReserved) {
        setIsReserved(true);
      } else {
        setIsReserved(false);
      }
      return reserved;
    });
  };

  return (
    <div className="inside">
      <Table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          { missions.map(({
            id, name, description, reserved,
          }) => (
            <tr key={id}>
              <td style={{ width: 150 }}>
                <b>
                  {name}
                </b>
              </td>
              <td>
                {description}
              </td>
              <td style={style}>
                <button type="button">
                  {reserved ? <span className="active">Active member</span> : <span className="not-active">Not a member</span>}
                </button>
              </td>
              <td style={style}>
                <button type="button" onClick={() => handleClick(id)}>
                  {reserved ? <span className="leave">Leave Mission</span> : <span className="join">Join Mission</span>}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
