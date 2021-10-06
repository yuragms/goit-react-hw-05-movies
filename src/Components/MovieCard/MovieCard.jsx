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
      <div>
        <h2>
          {title} {release_date.slice(0, -6)}
        </h2>
        <p>User Score: {vote_average * 10 + "%"}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </>
  );
};

export default MovieCard;
