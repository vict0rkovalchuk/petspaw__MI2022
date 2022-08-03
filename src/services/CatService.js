import { useHttp } from '../hooks/http.hook';

const useCatService = () => {
  const { loading, request, error } = useHttp();

  const _apiBase = 'https://api.thecatapi.com/v1/';

  const getAllBreeds = async () => {
    const res = await request(`${_apiBase}breeds`);
    return __transformBreedsList(res);
  };

  const getBreedById = async id => {
    const res = await request(`${_apiBase}breeds/${id}`);
    return res;
  };

  const getAllCats = (
    limit = 5,
    order = 'RANDOM',
    types = 'jpg,png',
    breedId = ''
  ) => {
    const res = request(
      `${_apiBase}images/search?&limit=${limit}&page=0&order=${order}&mime_types=${types}&breed_ids=${breedId}`
    );
    return res;
  };

  const getBreedsImages = (limit = 10, page = 0) => {
    const res = request(`${_apiBase}breeds?&limit=${limit}&page=${page}`);
    return res;
  };

  const getRandomCat = async () => {
    const res = await request(`${_apiBase}images/search`);
    return __transformCat(res[0]);
  };

  const getCatById = async id => {
    const res = await request(`${_apiBase}images/${id}`);
    return __transformCat(res);
  };

  const getSearchedQueryId = async query => {
    const res = await request(`${_apiBase}breeds/search?q=${query}`);
    if (res.length === 0) {
      return null;
    }
    return res[0].id;
  };

  const getImagesForQuery = async query => {
    const id = await getSearchedQueryId(query);
    const res = await request(
      `${_apiBase}images/search?&limit=25&breed_ids=${id}`
    );
    return res;
  };

  const __transformCat = cat => {
    return {
      image: cat.url,
      id: cat.id
    };
  };

  const __transformBreedsList = list => {
    return list.map(item => ({
      name: item.name,
      id: item.id
    }));
  };

  return {
    loading,
    error,
    getAllBreeds,
    getBreedById,
    getAllCats,
    getBreedsImages,
    getRandomCat,
    getCatById,
    getImagesForQuery
  };
};

export default useCatService;
