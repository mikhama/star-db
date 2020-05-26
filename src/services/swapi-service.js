class SwapiService {
  apiBase = 'https://swapi.dev/api';

  imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this.apiBase}${url}`);
    const { ok, status } = res;

    if (!ok) {
      throw new Error(`Could not fetch ${url}, received ${status}`);
    }

    return res.json();
  }

  getAllPeople = async () => {
    const { results } = await this.getResource('/people/');
    return results.map(this.transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this.transformPerson(person);
  }

  getAllPlanets = async () => {
    const { results } = await this.getResource('/planets/');
    return results.map(this.transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this.transformPlanet(planet);
  }

  getAllStarships = async () => {
    const { results } = await this.getResource('/starships/');
    return results.map(this.transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this.transformStarship(starship);
  }

  extractId = (url) => {
    const idRegExp = /\/(\d*)\/$/;
    const [, id] = url.match(idRegExp);

    return id;
  }

  getPersonImage = ({ id }) => `${this.imageBase}/characters/${id}.jpg`;

  getStarshipImage = ({ id }) => `${this.imageBase}/starships/${id}.jpg`;

  getPlanetImage = ({ id }) => `${this.imageBase}/planets/${id}.jpg`;

  transformPlanet = ({
    url,
    name,
    population,
    diameter,
    rotation_period: rotationPeriod,
  }) => ({
    id: this.extractId(url),
    name,
    population,
    diameter,
    rotationPeriod,
  });

  transformStarship = ({
    url,
    name,
    model,
    manufacturer,
    length,
    crew,
    passengers,
    cost_in_credits: costInCredits,
    cargo_capacity: cargoCapacity,
  }) => ({
    id: this.extractId(url),
    name,
    model,
    manufacturer,
    costInCredits,
    length,
    crew,
    passengers,
    cargoCapacity,
  });

  transformPerson = ({
    url,
    name,
    gender,
    birth_year: birthYear,
    eye_color: eyeColor,
  }) => ({
    id: this.extractId(url),
    name,
    gender,
    birthYear,
    eyeColor,
  });
}

export default SwapiService;
