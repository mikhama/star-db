import React from 'react';
import { PropTypes } from 'prop-types';

const PlanetView = ({
  planet: {
    id,
    name,
    population,
    rotationPeriod,
    diameter,
  },
}) => (
  <div className="card-body">
    <div className="random-planet-img-container">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} width="100" height="100" />
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
);

PlanetView.propTypes = {
  planet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    rotationPeriod: PropTypes.number.isRequired,
    diameter: PropTypes.number.isRequired,
  }).isRequired,
};

export default PlanetView;
