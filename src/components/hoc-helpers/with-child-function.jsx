import React from 'react';

const withChildFunction = (Wrapped, fn) => (
  (props) => (
    <Wrapped {...props}>
      {fn}
    </Wrapped>
  )
);

export default withChildFunction;
