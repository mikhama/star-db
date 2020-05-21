import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PlanetDetails from '../planet-details';
import StarshipDetails from '../starship-details';

const App = () => (
  <div className="app">
    <Header />
    <main className="container page-layout">
      <RandomPlanet />
      <div className="row">
        <div className="col-md">
          <ItemList />
        </div>
        <div className="col-md">
          <PersonDetails />
        </div>
      </div>
    </main>
  </div>
);

export default App;
