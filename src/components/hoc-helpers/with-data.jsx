import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  class ComponentWithData extends Component {
    state = {
      data: null,
      isLoading: true,
      isError: false,
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
      try {
        const { getData } = this.props;

        await this.setState({
          isLoading: true,
          isError: false,
        });

        const data = await getData();

        this.setState({
          data,
          isLoading: false,
        });
      } catch (error) {
        await this.setState({
          isLoading: false,
          isError: true,
        });
      }
    }

    render = () => {
      const { data, isLoading, isError } = this.state;

      if (isLoading) {
        return <Spinner />;
      }

      if (isError) {
        return <ErrorIndicator />;
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
