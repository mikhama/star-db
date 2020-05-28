import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

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

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount = () => clearInterval(this.interval);

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

RandomPlanet.propTypes = {
  updateInterval: PropTypes.number,
};

RandomPlanet.defaultProps = {
  updateInterval: 25000,
};

export default RandomPlanet;
