import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import InfoMessage from '../info-message';
import PersonView from './person-view';

class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    isError: false,
    isLoading: true,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    const { personId } = this.props;

    if (personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  onPersonLoaded = (person) => this.setState({
    person,
    isLoading: false,
  });

  onError = () => this.setState({
    isError: true,
    isLoading: false,
  });

  updatePerson = async () => {
    try {
      const { personId } = this.props;

      if (!personId) {
        this.onPersonLoaded(null);
        return;
      }

      this.setState({ isLoading: true });
      const person = await this.swapiService.getPerson(personId);
      this.onPersonLoaded(person);
    } catch (error) {
      this.onError();
    }
  }

  render = () => {
    const { person, isLoading, isError } = this.state;

    const isDataEmpty = !(isLoading || isError || person);
    const hasData = !(isLoading || isError || isDataEmpty);

    const errorMessage = isError ? <ErrorIndicator /> : null;
    const infoMessage = isDataEmpty ? <InfoMessage /> : null;
    const spinner = isLoading ? <Spinner /> : null;
    const content = hasData ? <PersonView person={person} /> : null;

    return (
      <div className="card text-white bg-primary border-danger person-details">
        {spinner}
        {errorMessage}
        {infoMessage}
        {content}
      </div>
    );
  }
}

PersonDetails.propTypes = {
  personId: PropTypes.string.isRequired,
};

export default PersonDetails;
