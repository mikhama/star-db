import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ({
  itemId,
  swapiService: {
    getPerson,
    getPersonImage,
  },
}) => (
  <ItemDetails
    itemId={itemId}
    getData={getPerson}
    getImageUrl={getPersonImage}
  >
    <Record field="gender" label="Gender" />
    <Record field="birthYear" label="Birth Year" />
    <Record field="eyeColor" label="Eye Color" />
  </ItemDetails>
);

export default withSwapiService(PersonDetails);
