import React from 'react';
import { PropTypes } from 'prop-types';

const ItemView = ({
  item: {
    name,
    gender,
    birthYear,
    eyeColor,
  },
  image,
}) => (
  <>
    <h4 className="card-header">{name}</h4>
    <div className="card-body">
      <div className="item-details-img-container">
        <img src={image} alt={name} width="100" />
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

ItemView.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    birthYear: PropTypes.string.isRequired,
    eyeColor: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
};

export default ItemView;
