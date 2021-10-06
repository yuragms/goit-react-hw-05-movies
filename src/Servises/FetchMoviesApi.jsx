import axios from "axios";
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "f0bfae51191eefc01e995fd22563790b";

const getDayPopularFilms = async () => {
  try {
    const data = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${KEY}`
    );
    return data.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const getDetailsmovie = async (movieId) => {
  try {
    const data = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
    );

    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getCastInfoMovie = async (movieId) => {
  try {
    const data = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );

    return data.data.cast;
  } catch (error) {
    console.log(error.message);
  }
};

const getReviewInfoMovie = async (movieId) => {
  try {
    const data = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
    );

    return data.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const getQueryFilms = async (query) => {
  try {
    const data = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
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
