import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../spinner';

const withData = (View, getData) => {
  class ComponentWithData extends Component {
    state = {
      data: null,
    }

    async componentDidMount() {
      const data = await getData();

      this.setState({ data });
    }

    render = () => {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  }

  ComponentWithData.propTypes = {
    getData: PropTypes.func.isRequired,
  };

  return ComponentWithData;
};

export default withData;
