import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missionList = (mission) => {
      const { name, year, country, destination } = mission;
      const n = name;
      const y = year;
      const c = country;
      const d = destination;
      return (
        <MissionCard key={ n } name={ n } year={ y } country={ c } destination={ d } />
      );
    };

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {missions.map(missionList)}
        </div>
      </div>
    );
  }
}
export default Missions;
