import ItemList from '../item-list';
import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

const renderName = ({ name }) => name;
const renderModelAndName = ({ name, model }) => `${name} (${model})`;

const mapPersonMethodsToProps = ({ getAllPeople }) => ({
  getData: getAllPeople,
});

const mapPlanetMethodsToProps = ({ getAllPlanets }) => ({
  getData: getAllPlanets,
});

const mapStarshipMethodsToProps = ({ getAllStarships }) => ({
  getData: getAllStarships,
});

const PersonList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName),
  ),
  mapPersonMethodsToProps,
);

const PlanetList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName),
  ),
  mapPlanetMethodsToProps,
);

const StarshipList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderModelAndName),
  ),
  mapStarshipMethodsToProps,
);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
