import React from 'react';

const RandomPlanet = () => (
  <div className="card text-white bg-dark random-planet">
    <div className="card-body">
      <div className="random-planet-img-container">
        <img src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" alt="Planet" width="100" height="100" />
      </div>
      <div className="random-planet-description-container">
        <h4 className="card-title">Tatooine</h4>
        <div className="card-text">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Population</th>
                <td>100000</td>
              </tr>
              <tr>
                <th scope="row">Rotation</th>
                <td>Period 36</td>
              </tr>
              <tr>
                <th scope="row">Diameter</th>
                <td>42000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default RandomPlanet;
