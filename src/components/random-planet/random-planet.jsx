import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import PlanetView from './planet-view';

class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    isLoading: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => this.setState({
    planet,
    isLoading: false,
  });

  async updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;

    const planet = await this.swapiService.getPlanet(id);
    this.onPlanetLoaded(planet);
  }

  render = () => {
    const { planet, isLoading } = this.state;

    const spinner = isLoading ? <Spinner /> : null;
    const content = !isLoading ? <PlanetView planet={planet} /> : null;

    return (
      <div className="card text-white bg-dark random-planet">
        {spinner}
        {content}
      </div>
    );
  }
}

export default RandomPlanet;
