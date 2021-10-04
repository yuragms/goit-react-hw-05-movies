import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetailsmovie } from "../Servises/FetchMoviesApi.jsx";
import MovieCard from "../Components/MovieCard/MovieCard.jsx";

const MovieDetailsView = () => {
  const [movie, setMovie] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    getDetailsmovie(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);
  console.log(movie.poster_path);

  const imgBaseUrl = "https://image.tmdb.org/t/p/w300/";

  return (
    <MovieCard
      url={`${imgBaseUrl}${movie.poster_path}`}
      title={movie.title}
      genres={
        movie.genres && movie.genres.map((genre) => genre.name).join(", ")
      }
      release_date={movie.release_date}
      vote_average={movie.vote_average}
      overview={movie.overview}
    />
  );
};

export default MovieDetailsView;
