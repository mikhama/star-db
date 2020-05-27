import React, { Children } from 'react';
import { PropTypes } from 'prop-types';

const ItemView = ({
  item: {
    name,
    gender,
    birthYear,
    eyeColor,
  },
  image,
  children,
}) => (
  <>
    <h4 className="card-header">{name}</h4>
    <div className="card-body">
      <div className="item-details-img-container">
        <img src={image} alt={name} width="100" />
      </div>
      <table className="table">
        <tbody>
          {Children.map(children, (child) => child)}
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
  children: PropTypes.element.isRequired,
};

export default ItemView;
