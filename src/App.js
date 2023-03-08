import React from 'react';
import Header from './components/Header';
import MissionCard from './components/MissionCard';
import Missions from './components/Missions';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SolarSystem />
        <PlanetCard />
        <Missions />
        <MissionCard />
      </div>
    );
  }
}

export default App;
