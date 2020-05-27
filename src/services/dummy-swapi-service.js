import * as dummyPersonImage from './dummy-person.jpeg';
import * as dummyPlanetImage from './dummy-planet.jpg';
import * as dummyStarshipImage from './dummy-starship.jpg';

const people = [
  {
    id: '1',
    name: 'Sheldon [TEST DATA]',
    gender: 'male',
    birthYear: '1986',
    eyeColor: 'blue',
  },
  {
    id: '2',
    name: 'Cooper [TEST DATA]',
    gender: 'male',
    birthYear: '1987',
    eyeColor: 'green',
  },
  {
    id: '3',
    name: 'Flash [TEST DATA]',
    gender: 'male',
    birthYear: '1970',
    eyeColor: 'brown',
  },
];

const planets = [
  {
    id: '1',
    name: 'Earth [TEST DATA]',
    population: '6000000000',
    diameter: '20900',
    rotationPeriod: '24',
  },
  {
    id: '2',
    name: 'Third planet [TEST DATA]',
    population: '6900000000',
    diameter: '21900',
    rotationPeriod: '1 day',
  },
  {
    id: '3',
    name: 'Blue planet [TEST DATA]',
    population: '890000000',
    diameter: '30003',
    rotationPeriod: '1 day',
  },
];

const starships = [
  {
    id: '1',
    name: 'Appolo 1 [TEST DATA]',
    model: 'v1056',
    manufacturer: 'Appolo Inc.',
    costInCredits: '34324324',
    length: '1000 fet',
    crew: '2',
    passengers: '0',
    cargoCapacity: '123 m3',
  },
  {
    id: '2',
    name: 'Appolo 1334 [TEST DATA]',
    model: 'turbo3002',
    manufacturer: 'Appolo & Partners',
    costInCredits: '454545454',
    length: '2000 fet',
    crew: '20',
    passengers: '1',
    cargoCapacity: '1230 m3',
  },
  {
    id: '3',
    name: 'Appolo New [TEST DATA]',
    model: '2020',
    manufacturer: 'Appolo Inc.',
    costInCredits: '1000000',
    length: '23000 fet',
    crew: '21',
    passengers: '23',
    cargoCapacity: '9023 m3',
  },
];

class DummySwapiService {
  getAllPeople = async () => people;

  getPerson = async (id) => people.find((item) => item.id === id);

  getAllPlanets = async () => planets;

  getPlanet = async (id) => planets.find((item) => item.id === id);

  getAllStarships = async () => starships;

  getStarship = async (id) => starships.find((item) => item.id === id);

  getPersonImage = () => dummyPersonImage;

  getStarshipImage = () => dummyStarshipImage;

  getPlanetImage = () => dummyPlanetImage;
}

export default DummySwapiService;
