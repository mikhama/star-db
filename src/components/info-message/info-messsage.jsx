import React from 'react';

import icon from './r2-d2.png';

const InfoMessage = () => (
  <div className="alert alert-info info-message" role="alert">
    <img className="info-message-icon" src={icon} alt="Info" />
    <p className="info-message-heading">
      <i className="fa fa-ellipsis-h" aria-hidden="true" />
      {' '}
      <i className="fa fa-question-circle" aria-hidden="true" />
      {' '}
      <i className="fa fa-ellipsis-h" aria-hidden="true" />
      {' '}
      BOOP-BEEP!
      {' '}
      <i className="fa fa-ellipsis-h" aria-hidden="true" />
      {' '}
      <i className="fa fa-question-circle" aria-hidden="true" />
      {' '}
      <i className="fa fa-ellipsis-h" aria-hidden="true" />
    </p>
    <p>Please choose someone from the list</p>
  </div>
);

export default InfoMessage;
