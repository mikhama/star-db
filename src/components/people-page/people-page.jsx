import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  componentDidCatch = () => this.setState({ hasError: true });

  render = () => {
    const { selectedPerson, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
      />
    );

    const personDetails = <PersonDetails personId={selectedPerson} />;

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}

export default PeoplePage;
