import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PlanetDetails from '../planet-details';
import StarshipDetails from '../starship-details';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  }

  componentDidCatch = () => this.setState({ hasError: true });

  render = () => {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="app">
        <Header />
        <main className="container page-layout">
          <RandomPlanet />
          <PeoplePage />

          {/* <div className="row">
            <div className="col-md">
              <ItemList
                onItemSelected={() => {}}
                getData={this.swapiService.getAllPlanets}
                renderItem={({ name, diameter }) => (
                  <span>
                    {`${name} (${diameter})`}
                    <button type="button">!</button>
                  </span>
                )}
              />
            </div>
            <div className="col-md">
              <PersonDetails personId={null} />
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <ItemList
                onItemSelected={() => {}}
                getData={this.swapiService.getAllStarships}
                renderItem={({ name, model }) => `${name} (${model})`}
              />
            </div>
            <div className="col-md">
              <PersonDetails personId={null} />
            </div>
          </div> */}

        </main>
      </div>
    );
  }
}
export default App;
