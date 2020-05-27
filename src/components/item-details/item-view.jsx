import React, { Children } from 'react';
import { PropTypes } from 'prop-types';

const ItemView = ({
  item,
  image,
  children,
}) => (
  <>
    <h4 className="card-header">{item.name}</h4>
    <div className="card-body">
      <div className="item-details-img-container">
        <img src={image} alt={item.name} width="100" />
      </div>
      <table className="table">
        <tbody>
          {Children.map(children, (child) => React.cloneElement(child, { item }))}
        </tbody>
      </table>
    </div>
  </>
);

ItemView.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default ItemView;
