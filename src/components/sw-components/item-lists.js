import ItemList from '../item-list';
import {
  withData,
  withChildFunction,
  withSwapiService,
  compose,
} from '../hoc-helpers';

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

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName),
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName),
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelAndName),
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
