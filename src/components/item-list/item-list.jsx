import React from 'react';
import { PropTypes } from 'prop-types';

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
  const items = data.map(({ id, ...item }) => {
    const label = renderLabel(item);

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return (
    <ul className="list-group item-list">
      {items}
    </ul>
  );
};

ItemList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func,
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};

export default ItemList;
