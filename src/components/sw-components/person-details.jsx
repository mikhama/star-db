import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => (
  <ItemDetails {...props}>
    <Record field="gender" label="Gender" />
    <Record field="birthYear" label="Birth Year" />
    <Record field="eyeColor" label="Eye Color" />
  </ItemDetails>
);

const mapMethodsToProps = ({ getPerson, getPersonImage }) => ({
  getData: getPerson,
  getImageUrl: getPersonImage,
});

export default withSwapiService(mapMethodsToProps)(PersonDetails);
