import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  }

  async componentDidMount() {
    const peopleList = await this.swapiService.getAllPeople();

    this.setState({ peopleList });
  }

  renderItems = (items) => {
    const { onItemSelected } = this.props;

    return items.map(({ id, name }) => (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {name}
      </li>
    ));
  }

  render = () => {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="list-group item-list">
        {items}
      </ul>
    );
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};

export default ItemList;
