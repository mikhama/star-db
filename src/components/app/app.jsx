import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage,
} from '../pages';
import { StarshipDetails } from '../sw-components';

class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  }

  onLogin = () => this.setState({ isLoggedIn: true });

  onServiceChange = () => this.setState(({ swapiService, ...state }) => {
    const service = swapiService instanceof SwapiService
      ? new DummySwapiService()
      : new SwapiService();

    return { ...state, swapiService: service };
  })

  render = () => {
    const { swapiService, isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService}>
          <BrowserRouter>
            <div className="app">
              <Header onServiceChange={this.onServiceChange} />
              <main className="container page-layout">
                <RandomPlanet />

                <Switch>
                  <Route exact path="/" render={() => <h2>Welcome to Star Database</h2>} />
                  <Route path="/people/:id?" component={PeoplePage} />
                  <Route path="/planets" component={PlanetsPage} />
                  <Route exact path="/starships" component={StarshipsPage} />
                  <Route
                    path="/starships/:id"
                    render={
                      ({ match }) => <StarshipDetails itemId={match.params.id} />
                    }
                  />
                  <Route
                    path="/login"
                    render={
                      () => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                    }
                  />
                  <Route
                    path="/secret"
                    render={
                      () => <SecretPage isLoggedIn={isLoggedIn} />
                    }
                  />

                  {/* Here can be Redirect: */}
                  {/* <Redirect to="/" /> */}

                  {/* Or default Route: */}
                  <Route render={() => <h2>Page not found</h2>} />
                </Switch>

              </main>
            </div>
          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
export default App;
