class CatService {
  _apiBase = 'https://api.thecatapi.com/v1/images/';

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
    const res = await this.getResource(`https://api.thecatapi.com/v1/breeds`);
    return this.__transformBreedsList(res);
  };

  // getAllCats = () => {
  //   const res = this.getResource(`${this._apiBase}search?&limit=10&page=0`);
  //   return res;
  // };

  getBreedsImages = (limit, page) => {
    const res = this.getResource(
      `https://api.thecatapi.com/v1/breeds?&limit=${limit}&page=${page}`
    );
    return res;
  };

  getRandomCat = async () => {
    const res = await this.getResource(`${this._apiBase}search`);
    return this.__transformCat(res[0]);
  };

  getCatById = async id => {
    const res = await this.getResource(`${this._apiBase}${id}`);
    return this.__transformCat(res);
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
