import React from 'react';
import { PropTypes } from 'prop-types';

const PersonView = ({
  person: {
    id,
    name,
    gender,
    birthYear,
    eyeColor,
  },
}) => (
  <>
    <h4 className="card-header">{name}</h4>
    <div className="card-body">
      <div className="person-details-img-container">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name} width="100" />
      </div>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Gender</th>
            <td>{gender}</td>
          </tr>
          <tr>
            <th scope="row">Birth year</th>
            <td>{birthYear}</td>
          </tr>
          <tr>
            <th scope="row">Eye color</th>
            <td>{eyeColor}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

PersonView.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    birthYear: PropTypes.string.isRequired,
    eyeColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonView;
