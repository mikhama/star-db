import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="card border-info mb-3">
      <div className="card-header">Login to see secret page!</div>
      <div className="card-body text-center">
        <button
          className="btn btn-danger"
          type="button"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
