import { useEffect, useState } from "react";
import SearchForm from "../Components/Form/Form";
import { getQueryFilms } from "../Servises/FetchMoviesApi";
import ListMovies from "../Components/ListMovies/ListMovies.jsx";

const MoviePage = () => {
  const [query, setQuery] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    getQueryFilms(query).then(setMovie);
  }, [query]);

  const handleFormSubmit = (searchFieldvalue) => {
    setQuery(searchFieldvalue);
    // setData([]);
    // setError(null);
  };

  console.log(movie);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {movie && ListMovies(movie)}
    </>
  );
};

export default MoviePage;
