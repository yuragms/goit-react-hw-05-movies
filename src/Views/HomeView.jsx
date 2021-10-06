import { useEffect, useState } from "react";
import { getDayPopularFilms } from "../Servises/FetchMoviesApi.jsx";
import ListMovies from "../Components/ListMovies/ListMovies.jsx";

const HomePage = () => {
  const [topMovies, setTopMovies] = useState(null);

  useEffect(() => {
    getDayPopularFilms().then((res) => setTopMovies(res));
  }, []);

  console.log(topMovies);

  return (
    <>
      <h1>Trending today</h1>
      {topMovies && ListMovies(topMovies)}
    </>
  );
};

export default HomePage;
