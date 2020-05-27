import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

class App extends Component {
  state = {
    swapiService: new SwapiService(),
  }

  onServiceChange = () => this.setState(({ swapiService, ...state }) => {
    const service = swapiService instanceof SwapiService
      ? new DummySwapiService()
      : new SwapiService();

    return { ...state, swapiService: service };
  })

  render = () => {
    const { swapiService } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService}>
          <div className="app">
            <Header onServiceChange={this.onServiceChange} />
            <main className="container page-layout">
              <RandomPlanet />

              <PeoplePage />
              <PlanetsPage />
              <StarshipsPage />

            </main>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
export default App;
