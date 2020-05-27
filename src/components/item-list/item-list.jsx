import React from 'react';
import { PropTypes } from 'prop-types';

import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers';

const { getAllPeople } = new SwapiService();

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
  data: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

export default withData(ItemList, getAllPeople);
