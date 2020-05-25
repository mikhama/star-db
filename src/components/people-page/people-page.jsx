import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

class PeoplePage extends Component {
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

    return (
      <div className="row">
        <div className="col-md">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
