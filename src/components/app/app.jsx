import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
          <BrowserRouter>
            <div className="app">
              <Header onServiceChange={this.onServiceChange} />
              <main className="container page-layout">
                <RandomPlanet />

                <Route exact path="/" render={() => <h2>Welcome to Star Database</h2>} />
                <Route path="/people" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} />

              </main>
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
export default App;
