import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => (
  <ItemDetails {...props}>
    <Record field="population" label="Population" />
    <Record field="diameter" label="Diameter" />
    <Record field="rotationPeriod" label="Rotation Period" />
  </ItemDetails>
);

const mapMethodsToProps = ({ getPlanet, getPlanetImage }) => ({
  getData: getPlanet,
  getImageUrl: getPlanetImage,
});

export default withSwapiService(PlanetDetails, mapMethodsToProps);
