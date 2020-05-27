import React from 'react';
import { PropTypes } from 'prop-types';

const Record = ({ item, field, label }) => (
  <tr>
    <th scope="row">{label}</th>
    <td>{field}</td>
  </tr>
);

Record.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Record;
