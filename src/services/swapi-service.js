class SwapiService {
  apiBase = 'https://swapi.dev/api';

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
    const starship = this.getResource(`/starship/${id}/`);
    return this.transformStarship(starship);
  }

  extractId = (url) => {
    const idRegExp = /\/(\d*)\/$/;
    const [, id] = url.match(idRegExp);

    return id;
  }

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
    costInCredits,
    length,
    crew,
    passengers,
    cargoCapacity,
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
