import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetailsmovie } from "../Servises/FetchMoviesApi.jsx";
import MovieCard from "../Components/MovieCard/MovieCard.jsx";

const MovieDetailsView = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetailsmovie(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);

  const imgBaseUrl = "https://image.tmdb.org/t/p/w500/";
  const { backdrop_path, title, genres, release_date, vote_average, overview } =
    movie;

  return (
    <MovieCard
      url={`${imgBaseUrl}${backdrop_path}`}
      title={title}
      genres={genres.map((genre) => genre.name).join(", ")}
      release_date={release_date}
      vote_average={vote_average}
      overview={overview}
    />
  );
};

export default MovieDetailsView;
