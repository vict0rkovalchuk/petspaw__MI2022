class CatService {
  _apiBase = 'https://api.thecatapi.com/v1/';

  getResource = async url => {
    let res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '25d43ff1-1cea-4522-a197-fb9a5dc0c092'
      }
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllBreeds = async () => {
    const res = await this.getResource(`${this._apiBase}breeds`);
    return this.__transformBreedsList(res);
  };

  getBreedById = async id => {
    const res = await this.getResource(`${this._apiBase}breeds/${id}`);
    return res;
  };

  getAllCats = (
    limit = 5,
    order = 'RANDOM',
    types = 'jpg,png',
    breedId = ''
  ) => {
    const res = this.getResource(
      `${this._apiBase}images/search?&limit=${limit}&page=0&order=${order}&mime_types=${types}&breed_ids=${breedId}`
    );
    return res;
  };

  getBreedsImages = (limit = 10, page = 0) => {
    const res = this.getResource(
      `${this._apiBase}breeds?&limit=${limit}&page=${page}`
    );
    return res;
  };

  getRandomCat = async () => {
    const res = await this.getResource(`${this._apiBase}images/search`);
    return this.__transformCat(res[0]);
  };

  getCatById = async id => {
    const res = await this.getResource(`${this._apiBase}images/${id}`);
    return this.__transformCat(res);
  };

  getSearchedQueryId = async query => {
    const res = await this.getResource(
      `${this._apiBase}breeds/search?q=${query}`
    );
    if (res.length === 0) {
      return null;
    }
    return res[0].id;
  };

  getImagesForQuery = async query => {
    const id = await this.getSearchedQueryId(query);
    const res = await this.getResource(
      `${this._apiBase}images/search?&limit=25&breed_ids=${id}`
    );
    return res;
  };

  __transformCat = cat => {
    return {
      image: cat.url,
      id: cat.id
    };
  };

  __transformBreedsList = list => {
    return list.map(item => ({
      name: item.name,
      id: item.id
    }));
  };
}

export default CatService;
