import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  async updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;

    const {
      name,
      population,
      diameter,
      rotation_period: rotationPeriod,
    } = await this.swapiService.getPlanet(id);
    this.setState({
      id,
      name,
      population,
      diameter,
      rotationPeriod,
    });
  }

  render = () => {
    const {
      id,
      name,
      population,
      rotationPeriod,
      diameter,
    } = this.state;

    return (
      <div className="card text-white bg-dark random-planet">
        <div className="card-body">
          <div className="random-planet-img-container">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet" width="100" height="100" />
          </div>
          <div className="random-planet-description-container">
            <h4 className="card-title">{name}</h4>
            <div className="card-text">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Population</th>
                    <td>{population}</td>
                  </tr>
                  <tr>
                    <th scope="row">Rotation Period</th>
                    <td>{rotationPeriod}</td>
                  </tr>
                  <tr>
                    <th scope="row">Diameter</th>
                    <td>{diameter}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
