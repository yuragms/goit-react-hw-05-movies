import axios from "axios";
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// const BASE_URL = "https://api.themoviedb.org/3/";
// const KEY = "f0bfae51191eefc01e995fd22563790b";

axios.defaults.baseURL = process.env.REACT_APP_IMG_FETCH_BASE_URL;
axios.defaults.params = {
  api_key: process.env.REACT_APP_FETCH_KEY,
};

const getDayPopularFilms = async () => {
  try {
    const data = await axios.get(`trending/movie/day?`);
    return data.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const getDetailsmovie = async (movieId) => {
  try {
    const data = await axios.get(`movie/${movieId}?&language=en-US`);

    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getCastInfoMovie = async (movieId) => {
  try {
    const data = await axios.get(`movie/${movieId}/credits?&language=en-US`);

    return data.data.cast;
  } catch (error) {
    console.log(error.message);
  }
};

const getReviewInfoMovie = async (movieId) => {
  try {
    const data = await axios.get(`movie/${movieId}/reviews?&language=en-US`);

    return data.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const getQueryFilms = async (query) => {
  try {
    const data = await axios.get(
      `search/movie?api_key=&query=${query}&language=en-US&page=1&include_adult=false`
    );
    return data.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export {
  getDayPopularFilms,
  getDetailsmovie,
  getCastInfoMovie,
  getReviewInfoMovie,
  getQueryFilms,
};
