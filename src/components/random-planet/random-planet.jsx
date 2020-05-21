import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import PlanetView from './planet-view';
import ErrorIndicator from '../error-indicator';

class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    isLoading: true,
    isError: false,
  };

  constructor() {
    super();
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 2500);
  }

  onPlanetLoaded = (planet) => this.setState({
    planet,
    isLoading: false,
  });

  onError = () => this.setState({
    isError: true,
    isLoading: false,
  });

  updatePlanet = async () => {
    try {
      const id = Math.floor(Math.random() * 25) + 1;

      const planet = await this.swapiService.getPlanet(id);
      this.onPlanetLoaded(planet);
    } catch (error) {
      this.onError();
    }
  }

  render = () => {
    const { planet, isLoading, isError } = this.state;

    const hasData = !(isLoading || isError);

    const errorMessage = isError ? <ErrorIndicator /> : null;
    const spinner = isLoading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="card text-white bg-dark random-planet">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

export default RandomPlanet;
