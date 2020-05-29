import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="card border-info mb-3">
        <div className="card-body text-center">
          <h3>This page is full of secrets!!!</h3>
        </div>
      </div>
    );
  }

  return <Redirect to="/login" />;
};

SecretPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default SecretPage;
