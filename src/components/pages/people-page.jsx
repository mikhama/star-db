import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { PersonList, PersonDetails } from '../sw-components';
import Row from '../row';

const PeoplePage = ({ match, history }) => (
  <Row
    left={<PersonList onItemSelected={(id) => history.push(id)} />}
    right={<PersonDetails itemId={match.params.id} />}
  />
);

PeoplePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(PeoplePage);
