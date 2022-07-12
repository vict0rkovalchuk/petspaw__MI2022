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

  getAllCats = () => {
    return this.getResource(`${this._apiBase}search?&limit=10&page=0`);
  };

  getRandomCat = async () => {
    const res = await this.getResource(`${this._apiBase}search`);
    return this.__transformCat(res[0]);
  };

  getCatById = id => {
    return this.getResource(`${this._apiBase}${id}`);
  };

  __transformCat = cat => {
    return {
      image: cat.url,
      id: cat.id
    };
  };
}

export default CatService;
