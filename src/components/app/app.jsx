import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PlanetDetails from '../planet-details';
import StarshipDetails from '../starship-details';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

class App extends Component {
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
        </main>
      </div>
    );
  }
}
export default App;
