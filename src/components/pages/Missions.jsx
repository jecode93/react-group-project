import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMission } from '../../redux/missions/missionsSlice';
import '../styles/missions.css';

const Missions = () => {

  const style = {
    width: 130,
    verticalAlign: "middle",
    textAlign: "center",
  }

  const { missions } = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

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
          { missions.map((item) => (
            <tr key={item.mission_id}>
              <td style={{width: 150}}>
                <b>
                  {item.mission_name}
                </b>
              </td>
              <td>
                {item.description}
              </td>
              <td style={style}>Not a member</td>
              <td style={style}>Join mission</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
