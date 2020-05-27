import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-components';

class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
  }

  componentDidCatch = () => this.setState({ hasError: true });

  onServiceChange = () => this.setState(({ swapiService, ...state }) => {
    const service = swapiService instanceof SwapiService
      ? new DummySwapiService()
      : new SwapiService();

    return { ...state, swapiService: service };
  })

  render = () => {
    const { hasError, swapiService } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={swapiService}>
        <div className="app">
          <Header onServiceChange={this.onServiceChange} />
          <main className="container page-layout">
            <RandomPlanet />
            {/* <PeoplePage /> */}

            <PersonDetails itemId={1} />
            <PlanetDetails itemId={2} />
            <StarshipDetails itemId={3} />

            <PersonList />
            <StarshipList />
            <PlanetList />

          </main>
        </div>
      </SwapiServiceProvider>
    );
  }
}
export default App;
