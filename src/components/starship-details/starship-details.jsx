import React from 'react';

const StarshipDetails = () => (
  <div className="card text-white bg-primary border-danger starship-details">
    <h4 className="card-header">Death Star</h4>
    <div className="card-body">
      <div className="starship-details-img-container">
        <img src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" alt="Planet" width="100" />
      </div>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Model</th>
            <td>DS-1 Orbital Battle Station</td>
          </tr>
          <tr>
            <th scope="row">Manufacturer</th>
            <td>Imperial Department of Military Research, Sienar Fleet Systems</td>
          </tr>
          <tr>
            <th scope="row">Cost in credits</th>
            <td>1000000000000</td>
          </tr>
          <tr>
            <th scope="row">Length</th>
            <td>12000000</td>
          </tr>
          <tr>
            <th scope="row">Crew</th>
            <td> </td>
          </tr>
          <tr>
            <th scope="row">Passengers</th>
            <td>8433422</td>
          </tr>
          <tr>
            <th scope="row">Cargo capacity</th>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default StarshipDetails;
