import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import InfoMessage from '../info-message';
import ItemView from './item-view';

class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    isError: false,
    isLoading: true,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const { itemId } = this.props;

    if (itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onItemLoaded = (item, image) => this.setState({
    item,
    image,
    isLoading: false,
  });

  onError = () => this.setState({
    isError: true,
    isLoading: false,
  });

  updateItem = async () => {
    try {
      const { itemId, getData, getImageUrl } = this.props;
      if (!itemId) {
        this.onItemLoaded(null);
        return;
      }

      this.setState({ isLoading: true });
      const item = await getData(itemId);
      const image = getImageUrl(item);

      this.onItemLoaded(item, image);
    } catch (error) {
      this.onError();
    }
  }

  render = () => {
    const {
      item,
      isLoading,
      isError,
      image,
    } = this.state;

    const { children } = this.props;

    const isDataEmpty = !(isLoading || isError || item);
    const hasData = !(isLoading || isError || isDataEmpty);

    const errorMessage = isError ? <ErrorIndicator /> : null;
    const infoMessage = isDataEmpty ? <InfoMessage /> : null;
    const spinner = isLoading ? <Spinner /> : null;
    const content = hasData ? <ItemView item={item} image={image}>{children}</ItemView> : null;

    return (
      <div className="card text-white bg-primary border-danger item-details">
        {spinner}
        {errorMessage}
        {infoMessage}
        {content}
      </div>
    );
  }
}

ItemDetails.propTypes = {
  itemId: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  getImageUrl: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ItemDetails;
