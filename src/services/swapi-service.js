class SwapiService {
  apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);
    const { ok, status } = res;

    if (!ok) {
      throw new Error(`Could not fetch ${url}, received ${status}`);
    }

    return res.json();
  }

  async getAllPeople() {
    const { results } = await this.getResource('/people/');
    return results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const { results } = await this.getResource('/planets/');
    return results;
  }

  getPlanet(id) {
    return this.getResource(`/planet/${id}/`);
  }

  async getAllStarships() {
    const { results } = await this.getResource('/starships/');
    return results;
  }

  getStarship(id) {
    return this.getResource(`/starship/${id}/`);
  }
}

export default SwapiService;
