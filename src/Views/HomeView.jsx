import { useEffect, useState } from "react";
import { getDayPopularFilms } from "../Servises/FetchMoviesApi.jsx";
import { Link } from "react-router-dom";
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

  const listTopMovies = (topMovies) => {
    return (
      <ul>
        {topMovies.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <h1>Trending today</h1>
      {status === "resolved" && listTopMovies(topMovies)}
    </>
  );
};

export default HomePage;
