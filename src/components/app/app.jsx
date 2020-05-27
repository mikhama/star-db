import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-components';

class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  }

  componentDidCatch = () => this.setState({ hasError: true });

  render = () => {
    const { hasError } = this.state;
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="app">
        <Header />
        <main className="container page-layout">
          <RandomPlanet />
          {/* <PeoplePage /> */}

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList>
            {({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
          </PersonList>

          <StarshipList>
            {({ name }) => `${name}`}
          </StarshipList>

          <PlanetList>
            {({ name }) => `${name}`}
          </PlanetList>

        </main>
      </div>
    );
  }
}
export default App;
