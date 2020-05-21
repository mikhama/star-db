import React from 'react';

import icon from './death-star.png';

const ErrorIndicator = () => (
  <div className="alert alert-danger error-indicator" role="alert">
    <img className="error-indicator-icon" src={icon} alt="Error" />
    <p className="error-heading">
      <i className="fa fa-times" aria-hidden="true" />
      <i className="fa fa-bomb" aria-hidden="true" />
      <i className="fa fa-times" aria-hidden="true" />
      {' '}
      BOOM!
      {' '}
      <i className="fa fa-times" aria-hidden="true" />
      <i className="fa fa-bomb" aria-hidden="true" />
      <i className="fa fa-times" aria-hidden="true" />
    </p>
    <p>Something has gone terribly wrong</p>
    <p>(but we already sent droids to fix it))</p>
  </div>
);

export default ErrorIndicator;
