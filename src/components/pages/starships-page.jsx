import React from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { StarshipList } from '../sw-components';

const StarshipsPage = ({ history }) => (
  <StarshipList
    onItemSelected={(id) => history.push(id)}
  />
);

StarshipsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(StarshipsPage);
