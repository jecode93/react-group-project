import React from 'react';
import ReservedMissions from '../ReservedMissions';
import ReservedRockets from '../ReservedRockets';
import '../styles/profile.css';

const MyProfile = () => (
  <div className="inside">
    <section className="profile">
      <ReservedMissions />
      <ReservedRockets />
    </section>
  </div>
);

export default MyProfile;
