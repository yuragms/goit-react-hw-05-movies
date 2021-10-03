const MovieCard = ({
  url,
  title,
  genres,
  release_date,
  vote_average,
  overview,
}) => {
  return (
    <>
      <img src={url} alt={title} />
      <h2>
        {title} {release_date}
      </h2>
      <p>User Score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
    </>
  );
};

export default MovieCard;
