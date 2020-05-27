import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../spinner';

const withData = (View) => {
  class ComponentWithData extends Component {
    state = {
      data: null,
    }


    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      const { getData } = this.props;

      if (getData !== prevProps.getData) {
        this.update();
      }
    }

    async update() {
      const { getData } = this.props;

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
