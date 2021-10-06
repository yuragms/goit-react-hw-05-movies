import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import SearchForm from "../Components/Form/Form";
import { getQueryFilms } from "../Servises/FetchMoviesApi";
import ListMovies from "../Components/ListMovies/ListMovies.jsx";
import toast from "react-hot-toast";

const MoviePage = () => {
  const location = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState(() => {
    return new URLSearchParams(location.search).get("query") ?? null;
  });
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    getQueryFilms(query).then((data) => {
      if (data.length === 0) {
        toast.error("Нету фильмов с таким запросом");
      }
      setMovie(data);
    });
  }, [query]);

  const handleFormSubmit = (searchFieldvalue) => {
    setQuery(searchFieldvalue);
    history.push({ ...location, search: `query=${searchFieldvalue}` });
    // setData([]);
    // setError(null);
  };

  console.log(movie);
  console.log(history);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {movie && ListMovies(movie)}
    </>
  );
};

export default MoviePage;
