import React from 'react';

const PlanetDetails = () => (
  <div className="card text-white bg-primary border-danger planet-details">
    <h4 className="card-header">Dagobah</h4>
    <div className="card-body">
      <div className="planet-details-img-container">
        <img src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" alt="Planet" width="100" />
      </div>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Diameter</th>
            <td>89000</td>
          </tr>
          <tr>
            <th scope="row">Gravity</th>
            <td>N/A</td>
          </tr>
          <tr>
            <th scope="row">Orbital period</th>
            <td>341</td>
          </tr>
          <tr>
            <th scope="row">Population</th>
            <td>unknown</td>
          </tr>
          <tr>
            <th scope="row">Terrain</th>
            <td>swamp, jungles</td>
          </tr>
          <tr>
            <th scope="row">Climate</th>
            <td>murky</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PlanetDetails;
