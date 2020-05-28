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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(
    withChildFunction(renderName)(
      ItemList,
    ),
  ),
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(
    withChildFunction(renderName)(
      ItemList,
    ),
  ),
);

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(
    withChildFunction(renderModelAndName)(
      ItemList,
    ),
  ),
);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
