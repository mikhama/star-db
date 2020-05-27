import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({
  itemId,
  swapiService: {
    getPlanet,
    getPlanetImage,
  },
}) => (
  <ItemDetails
    itemId={itemId}
    getData={getPlanet}
    getImageUrl={getPlanetImage}
  >
    <Record field="population" label="Population" />
    <Record field="diameter" label="Diameter" />
    <Record field="rotationPeriod" label="Rotation Period" />
  </ItemDetails>
);

export default withSwapiService(PlanetDetails);
