import React from 'react';
import { PropTypes } from 'prop-types';

const Row = ({ left, right }) => (
  <div className="row">
    <div className="col-md">
      {left}
    </div>
    <div className="col-md">
      {right}
    </div>
  </div>
);

Row.propTypes = {
  left: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired,
};

export default Row;
