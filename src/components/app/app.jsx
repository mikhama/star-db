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
      <ItemList />
      <PersonDetails />
    </main>
  </div>
);

export default App;
