import { useParams, useRouteMatch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetailsmovie } from "../Servises/FetchMoviesApi.jsx";
import MovieCard from "../Components/MovieCard/MovieCard.jsx";
import AdditionaList from "../Components/AdditionList/AdditionList.jsx";
import Cast from "../Components/Cast/Cast.jsx";
import Review from "../Components/Reviews/Reviews";

const MovieDetailsView = () => {
  const [movie, setMovie] = useState("");
  const { url } = useRouteMatch();
  const { movieId } = useParams();

  useEffect(() => {
    getDetailsmovie(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);
  console.log(movie.poster_path);
  console.log(url);

  const imgBaseUrl = "https://image.tmdb.org/t/p/w300/";

  return (
    <>
      {movie && (
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
      )}
      <AdditionaList />

      <Route path={`${url}/cast`}>
        <Cast />
      </Route>
      <Route path={`${url}/reviews`}>
        <Review movieId={movieId} />
      </Route>
    </>
  );
};

export default MovieDetailsView;
