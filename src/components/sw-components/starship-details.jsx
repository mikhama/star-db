import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => (
  <ItemDetails {...props}>
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost" />
  </ItemDetails>
);

const mapMethodsToProps = ({ getStarship, getStarshipImage }) => ({
  getData: getStarship,
  getImageUrl: getStarshipImage,
});

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
