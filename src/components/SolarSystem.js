import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetList = (planet) => {
      const { name, image } = planet;
      return (
        <PlanetCard key={ name } planetName={ name } planetImage={ image } />
      );
    };

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {/* para cada elemento do meu array de planetas recebera minha função que retorna um componente(card) com props name e image. */}
        <div>
          {planets.map(planetList)}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
