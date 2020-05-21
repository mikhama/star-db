import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import StarshipDetails from '../starship-details';

class App extends Component {
  state = {
    selectedPerson: null,
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render = () => {
    const { selectedPerson } = this.state;

    return (
      <div className="app">
        <Header />
        <main className="container page-layout">
          <RandomPlanet />
          <div className="row">
            <div className="col-md">
              <ItemList onItemSelected={this.onPersonSelected} />
            </div>
            <div className="col-md">
              <PersonDetails personId={selectedPerson} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default App;
