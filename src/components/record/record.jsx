import React from 'react';
import { PropTypes } from 'prop-types';

const Record = ({ item, field, label }) => (
  <tr>
    <th scope="row">{label}</th>
    <td>{item[field]}</td>
  </tr>
);

Record.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.any,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Record.defaultProps = {
  item: {},
};

export default Record;
