import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../spinner';

class ItemList extends Component {
  state = {
    itemList: null,
  }

  async componentDidMount() {
    const { getData } = this.props;

    const itemList = await getData();

    this.setState({ itemList });
  }

  renderItems = (items) => {
    const { onItemSelected, children: renderItem } = this.props;

    return items.map(({ id, ...item }) => {
      const label = renderItem(item);

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
  }

  render = () => {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="list-group item-list">
        {items}
      </ul>
    );
  }
}

ItemList.propTypes = {
  children: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

export default ItemList;
