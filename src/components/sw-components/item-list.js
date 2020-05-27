import ItemList from '../item-list';
import { withData, withChildFunction } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = swapiService;

const renderName = ({ name }) => name;
const renderModelAndName = ({ name, model }) => `${name} (${model})`;

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople,
);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets,
);

const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarships,
);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
