import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';

import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {
      ({ getPerson, getPersonImage }) => (
        <ItemDetails
          itemId={itemId}
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          <Record field="gender" label="Gender" />
          <Record field="birthYear" label="Birth Year" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      )
    }

  </SwapiServiceConsumer>
);

const PlanetDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {
      ({ getPlanet, getPlanetImage }) => (
        <ItemDetails
          itemId={itemId}
          getData={getPlanet}
          getImageUrl={getPlanetImage}
        >
          <Record field="population" label="Population" />
          <Record field="diameter" label="Diameter" />
          <Record field="rotationPeriod" label="Rotation Period" />
        </ItemDetails>
      )
    }
  </SwapiServiceConsumer>
);

const StarshipDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {
      ({ getStarship, getStarshipImage }) => (
        <ItemDetails
          itemId={itemId}
          getData={getStarship}
          getImageUrl={getStarshipImage}
        >
          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost" />
        </ItemDetails>
      )
    }
  </SwapiServiceConsumer>
);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};
