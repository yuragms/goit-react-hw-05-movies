import { useEffect, useState } from "react";
import { getDayPopularFilms } from "../Servises/FetchMoviesApi.jsx";
import listMovies from "../Components/ListMovies/ListMovies.jsx";
// import MoviePage from './MovieView.jsx';

const HomePage = () => {
  const [topMovies, setTopMovies] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");
    getDayPopularFilms()
      .then((res) => setTopMovies(res))
      .then(() => {
        setStatus("resolved");
      });
  }, []);

  console.log(topMovies);

  return (
    <>
      <h1>Trending today</h1>
      {status === "resolved" && listMovies(topMovies)}
    </>
  );
};

export default HomePage;
